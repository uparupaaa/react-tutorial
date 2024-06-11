import TodoList from './TodoList';

function App() {
  return <div>
    <div>
      <TodoList />
      <input type='text' />
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </div>
  </div>;

}

export default App;
