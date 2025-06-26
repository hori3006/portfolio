// src/components/Hero.jsx
import "./Hero.css";
import profileImage from "../assets/profile.PNG";
import bikeImage from "../assets/bike.JPG";
import gameImage from "../assets/game.PNG";
import plamoImage from "../assets/plamo.JPG";
import maxtrackerImage from "../assets/maxtracker.png";
import salarytrackerImage from "../assets/salarytracker.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src={profileImage} alt="堀 壮心(Hori Soushin)" className="hero-photo" />
        <h1 className="hero-title">
          こんにちは、私は <span className="highlight">堀 壮心(Hori Soushin)</span> です。
        </h1>
        <p className="hero-role">熊本大学大学院自然科学教育部理学専攻</p>
        <p className="hero-description">
          私は、今フロントエンジニアを目指してReactやJavascript等を日々学習しており、最近では、バイトの給料計算機や筋トレのMAX重量を記録するアプリを、自分で企画・開発しています。
          大学の研究室では、液体FeS(硫黄鉄)合金のX線非弾性散乱測定に関する実験やoriginというソフトを用いたデータ解析を行っていて物質のミクロな構造やダイナミックスを研究しています。
          実験は兵庫県の大型放射光施設SPring-8で行っています。
        </p>

        <div className="hero-projects">
          <h2>📌 作成したアプリとこだわり</h2>

          <div className="project">
            <h3>💪 筋トレ記録アプリ - MaxTracker</h3>
            <ul>
              <li>最大重量だけでなく、記録履歴や日付も保存できるようにしました</li>
              <li>記録は「部位ごと」に整理し、視認性を意識したデザインにしました</li>
              <li>間違った記録は削除できるよう、削除ボタンも配置しています</li>
              <li>localStorageを使って、ページ更新後もデータが保持されます</li>
            </ul>
            <img src={maxtrackerImage} alt="MaxTracker スクリーンショット" className="project-image" />
            <p>
              <a
                href="https://your-deploy-url.com/max-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                ▶ アプリを開く
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://github.com/hori3006/-/blob/main/MaxTracker.jsx"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHubを見る
              </a>
            </p>
          </div>

          <div className="project">
            <h3>💰 バイト給料計算アプリ - SalaryTracker</h3>
            <ul>
              <li>毎月15日締めに対応した給料の月別自動集計を実装しました</li>
              <li>勤務記録は日ごとに残して、履歴と月別合計を両方確認可能</li>
              <li>時給を固定設定として管理し、過去記録が影響を受けない設計にしました</li>
              <li>localStorageを使って、ページ更新後もデータが保持されます</li>
            </ul>
            <img src={salarytrackerImage} alt="SalaryTracker スクリーンショット" className="project-image" />
            <p>
              <a
                href="https://your-deploy-url.com/salary-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                ▶ アプリを開く
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://github.com/hori3006/-/blob/main/SalaryTracker.jsx"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHubを見る
              </a>
            </p>
          </div>
        </div>

        <div className="hero-links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        <div className="hero-contact">
          <h2>連絡先</h2>
          <p>メール: ju20gawdon@icloud.com</p>
        </div>

        <div className="hero-hobbies">
          <h2>趣味</h2>
          <ul>
            <li>
              筋トレ、サイクリング
              <img src={bikeImage} className="bike-photo" alt="趣味のサイクリング" />
              <p className="hobby-description">
                これは愛車のTREKのロードバイクです。週末は自転車で熊本市内を走り回っています。筋トレに関しては記録をつけるためのアプリを作成しました。上記のリンクからアクセスできます。
              </p>
            </li>
          </ul>
        </div>

        <div className="hero-hobbies2">
          <h3>最近はまっているもの</h3>
          <ul>
            <li>
              ゲーム(主にソシャゲ)
              <img src={gameImage} alt="ゲーム画像" className="hobby-photo" />
              <p className="hobby-description">
                魔法少女まどか☆マギカ MAGIA EXEDRAをリリース日からやりまくりました。画像は最近主に使ってる編成です。
              </p>
            </li>
            <li>
              プラモデル
              <img src={plamoImage} alt="プラモデル画像" className="hobby-photo" />
              <p className="hobby-description">
                ガンダムジークアクス、エアリアル、ユニコーンの３つを作りました。ユニコーンガンダムは特に大きくて難しかったです。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
