import React, {useState, useEffect} from 'react';

const App2 = () => {
    const [counter, setValue] = useState(0);
    const [keyWord, setKeyWord] = useState("")
    const onClick = () => setValue((current) => current + 1)
    const onChange = (event) => {setKeyWord(event.target.value)}
    
    
    // useEffect는 우리 코드가 언제 실행될지 선택할 수 있게 해준다!
    // * useEffect는 두 개의 argument를 가지는데, 첫 번째 argument는 우리가 실행시키고 싶은 코드이고,
    //   두 번째는 dependencies이다. dependencies가 빈 배열이면, 처음 화면이 랜더링 될 때만 코드가 실행된다!
    //   dependencies는 react.js가 지켜봐야 하는 것으로, 이것들이 변화할 때, react.js가 코드를 재실행 시킨다.
    useEffect(()=>{
        console.log("I run only once.")
    }, []);
    useEffect(()=> {
        console.log("I run when 'keyword' changes.")
    }, [keyWord])
    useEffect(()=> {
        console.log("I run when 'counter' changes.")
    },[counter])
    useEffect(()=> {
        console.log("I run when keyword & counter changes.")
    }, [counter, keyWord])
    return (
        <div>
            <input value={keyWord} type="text" placeholder='Search here...' onChange={onChange}/>
            <h1>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
};

export default App2;