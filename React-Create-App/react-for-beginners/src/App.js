import Button from "./Button";
import styles from "./App.module.css";

// module.css를 사용해 className 속성으로 각 태그에 원하는 스타일 부여 가능!!
// 랜덤으로 클래스 이름이 부여되며 해당 스타일이 적용된다!

// 콘솔에 npm i prop-types로 propTypes 설치 가능!
function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
