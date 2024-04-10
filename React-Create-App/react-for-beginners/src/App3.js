import React,{useState,useEffect} from 'react';

const Hello = () => {

    useEffect(()=> {
        console.log("hi :)");
        return () => console.log("bye :(")
    }, [])
    // useEffect(function(){
    //     console.log("hi :)");
    //     return function () {
    //         console.log("bye :(")
    //     }
    // }, [])
    return <h1>Hello</h1>;
}
// return을 통해 Cleanup 함수 호출 가능! useEffect로 실행한 컴포넌트가 파괴될 때도 CleanUp 함수에서 코드를 실행
// 시킬 수 있음!
const App3 = () => {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing(prev => !prev);
    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
};

export default App3;