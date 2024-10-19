import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("https://api.github.com/users/Tsurugi-T")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      <header className="App-header bg-burlywood">
        <img
          src="https://images.photowall.com/products/48547/snowboard-jump-from-ramp.jpg?h=699&q=85"
          className="App-logo"
          alt="logo"
        />
        <p className="text-maroon">
          <code>WED</code> Communityにようこそ！
        </p>
        <a
          className="text-maroon text-4xl underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WEDについて
        </a>
        <a href="/newpage" className=" underline">
          コミュニティページ
        </a>
        <p className="text-4xl">{count}</p>
        <p
          className="text-4xl"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          👍
        </p>

        <p
          className="text-4xl"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          👎
        </p>
        {data ? (
          <>
            <img
              className="w-32 rounded-full mt-10"
              alt="icon"
              src={data.avatar_url}
            />
            <p className="text-wed-dark">{data.login}</p>
          </>
        ) : (
          <p>no data</p>
        )}
      </header>
    </div>
  );
}

export default App;
