import Setting from "./components/Setting/Setting";
import Display from "./components/Display/Display";
import Table from "./components/Table/Table";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 합치기 선택의 영역*/}
      <Display />
      <Table />
      <Setting />
    </>
  );
}

export default App;
