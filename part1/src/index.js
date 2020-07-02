import React from "react";
import ReactDOM from "react-dom";

// Hello 組件
// 組件命名要大寫
const Hello = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
};

// 組件 + 引數
const Hello1 = (props) => {
  return (
    <div>
      <p>Hello1 {props.name}</p>
    </div>
  );
};

// 組件 + 多引數
const Hello2 = (props) => {
  return (
    <div>
      <p>
        Hello2 {props.name} + {props.age}
      </p>
    </div>
  );
};

// 也可以用陣列方式取代 <div>，但不建議這樣作！
const Hello3 = (props) => {
  return [
    <p>
      Hello3 {props.name} + {props.age}
    </p>,
    <h1>Test Hello3</h1>,
  ];
};

const Part1_b = () => {
  // Variables 變數
  console.log("Variables");
  const x = 1;
  let y = 5; // 用var 也可以，但課程不建議
  console.log(x, y); // 1, 5 are printed
  y += 10;
  console.log(x, y); // 1, 15 are printed
  y = "sometext";
  console.log(x, y); // 1, sometext are printed
  //x = 4; // causes an error

  // Arrays 陣列
  console.log("Array");
  const t = [1, -1, 3];
  t.push(5);
  console.log(t.length);
  console.log(t[1]);

  t.forEach((value) => {
    console.log(value); // numbers 1, -1, 3, 5 are printed, each to own line
  });

  // map, 說是在React用的相當頻繁
  console.log("map");
  const t1 = [1, 2, 3];
  const m1 = t1.map((value) => value * 2);
  console.log(m1);
  const m2 = t1.map((value) => "<li>" + value + "</li>");
  console.log(m2);

  // Destructuring assignment 解構賦值
  console.log("Destructuring assignment 解構賦值");
  const t2 = [1, 2, 3];
  const [one, two, three] = t2;
  console.log(one + " " + two + " " + three);

  return <div></div>;
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log("test"); // 一樣可以用 console.log()
  return (
    <>
      {/* 不要多一個 <div>的話可以用 <>...</>來取代 */}
      <p>Hello world</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello />
      <Hello />
      <Hello1 name="Yuan" />
      <Hello1 name="Yen" />
      <Hello2 name="Eric" age={20} />
      <Hello3 name="test" age={30} />
      <Part1_b />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
