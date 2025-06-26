import React, { useState, useEffect } from "react";
import "./SalaryTracker.css";

const SalaryTracker = () => {
  const [workLogs, setWorkLogs] = useState(() => {
    const saved = localStorage.getItem("salaryLogs");
    return saved ? JSON.parse(saved) : [];
  });

  const [baseWage, setBaseWage] = useState(() => {
    const saved = localStorage.getItem("baseWage");
    return saved ? parseInt(saved, 10) : 1000;
  });

  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");

  useEffect(() => {
    localStorage.setItem("salaryLogs", JSON.stringify(workLogs));
  }, [workLogs]);

  useEffect(() => {
    localStorage.setItem("baseWage", baseWage.toString());
  }, [baseWage]);

  const handleAdd = () => {
    if (!date || !hours) return;
    const log = {
      id: Date.now(), // ← 一意なIDを追加
      date: new Date(date),
      hours: parseFloat(hours),
      wage: baseWage,
    };
    setWorkLogs([...workLogs, log]);
    setDate("");
    setHours("");
  };

  const handleDelete = (id) => {
    const updated = workLogs.filter(log => log.id !== id);
    setWorkLogs(updated);
  };

  const getSalaryMonthKey = (date) => {
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();
    const salaryDate = d >= 16 ? new Date(y, m + 1, 1) : new Date(y, m, 1);
    return `${salaryDate.getFullYear()}/${salaryDate.getMonth() + 1}`;
  };

  const calculateTotalByMonth = () => {
    const grouped = {};
    workLogs.forEach(log => {
      const key = getSalaryMonthKey(new Date(log.date));
      if (!grouped[key]) grouped[key] = 0;
      grouped[key] += log.hours * log.wage;
    });
    return grouped;
  };

  const totalByMonth = calculateTotalByMonth();

  return (
    <div className="salary-tracker">
      <h1>バイト給料計算機</h1>

      <div className="wage-settings">
        <label>基本時給：</label>
        <input
          type="number"
          value={baseWage}
          onChange={(e) => setBaseWage(parseInt(e.target.value, 10))}
        />
        <span>円</span>
      </div>

      <div className="input-group">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="勤務時間(h)" />
        <button onClick={handleAdd}>追加</button>
      </div>

      <h2>勤務履歴</h2>
      <ul className="record-list">
        {workLogs.map((log) => (
          <li key={log.id}>
            {new Date(log.date).toLocaleDateString("ja-JP")} - {log.hours}時間 × {log.wage}円 = {(log.hours * log.wage).toLocaleString()} 円
            <button className="delete-btn" onClick={() => handleDelete(log.id)}>削除</button>
          </li>
        ))}
      </ul>

      <h2>月別の給料合計（15日締め）</h2>
      <ul className="summary-list">
        {Object.entries(totalByMonth).map(([month, total]) => (
          <li key={month}>{month}：{total.toLocaleString()} 円</li>
        ))}
      </ul>
    </div>
  );
};

export default SalaryTracker;
