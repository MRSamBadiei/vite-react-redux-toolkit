import { useAppSelector, useAppDispatch } from "./features/hook";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user);
  return (
    <div className="App">
      <h1>hello {users.name}</h1>
    </div>
  );
};

export default App;
