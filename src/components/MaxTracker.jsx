import React, { useState, useEffect } from "react";
import "./MaxTracker.css";

const bodyParts = ["二頭筋", "三頭筋", "肩", "胸", "背中"];

function MaxTracker() {
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem("maxRecords");
    return saved ? JSON.parse(saved) : [];
  });

  const [bodyPart, setBodyPart] = useState("");
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    localStorage.setItem("maxRecords", JSON.stringify(records));
  }, [records]);

  const handleAdd = () => {
    
    if (!bodyPart || !exercise || !weight) return;
    const newWeight = parseFloat(weight);
    const date = new Date().toLocaleDateString("ja-JP");
    const newId = Date.now();

    setRecords(prev => {
      const updated = [...prev];
      const index = updated.findIndex(
        r => r.bodyPart === bodyPart && r.exercise === exercise
      );

      if (index >= 0) {
        if (newWeight > updated[index].weight) {
          updated[index] = { ...updated[index], weight: newWeight, date };
        }
      } else {
        updated.push({ id: newId, bodyPart, exercise, weight: newWeight, date });
      }
      return updated;
    });

    setBodyPart("");
    setExercise("");
    setWeight("");
  };

  const handleDelete = (id) => {
    setRecords(records.filter(record => record.id !== id));
  };

  const getMaxWeight = (exerciseName) => {
    const weights = records
      .filter((r) => r.exercise === exerciseName)
      .map((r) => r.weight);
    return weights.length ? Math.max(...weights) : 0;
  };

  return (
    <div className="max-tracker">
      <h1 className="title">筋トレMAX重量記録</h1>

      <div className="input-group">
        <select value={bodyPart} onChange={(e) => setBodyPart(e.target.value)}>
          <option value="">部位を選択</option>
          {bodyParts.map((part) => (
            <option key={part} value={part}>{part}</option>
          ))}
        </select>

        <input
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="種目名"
        />
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="number"
          placeholder="重量(kg)"
        />
        <button onClick={handleAdd}>記録追加</button>
      </div>

      {/* === 記録一覧 === */}
      <h2>記録一覧</h2>
      {bodyParts.map((part) => {
        const partRecords = records.filter(r => r.bodyPart === part);
        return partRecords.length > 0 && (
          <div key={part}>
            <h3>{part}</h3>
            <ul>
              {partRecords.map((record) => (
                <li key={record.id}>
                  {record.date} - {record.exercise}：{record.weight} kg
                  <button onClick={() => handleDelete(record.id)}>削除</button>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      {/* === MAX重量 === */}
      <h2>MAX重量</h2>
      {bodyParts.map((part) => {
        const partRecords = records.filter(r => r.bodyPart === part);
        const uniqueExercises = [...new Set(partRecords.map(r => r.exercise))];

        return uniqueExercises.length > 0 && (
          <div key={part}>
            <h3>{part}</h3>
            <ul>
              {uniqueExercises.map((name) => (
                <li key={name}>
                  {name}：{getMaxWeight(name)} kg
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default MaxTracker;
