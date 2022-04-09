import './App.css';

function UserTemplate({ user, onClickBtn }) {
  return (
    <div className="userRecord">
      <p>
        <span>User name:</span> {user.Name}
      </p>
      <p>
        <span>User age: </span>
        {user.Age}
      </p>
      <p>
        <span>User gender:</span> {user.Gender}
      </p>
      <p>
        <span>User status:</span>{' '}
        <span
          style={{ color: user.Active ? 'green' : 'red', display: 'block' }}
        >
          {user.Active ? 'Active' : 'deactivate'}
        </span>
        {/* {user.Active && <button>deactivate</button>} */}
        {user.Active ? (
          <button
            onClick={() => {
              onClickBtn(user.Name);
            }}
          >
            deactivate
          </button>
        ) : (
          <button
            onClick={() => {
              onClickBtn(user.Name);
            }}
          >
            Activate
          </button>
        )}
      </p>
    </div>
  );
}

function App(props) {
  const { title, users } = props;
  const onClickBtn = (name) => {
    console.log(`Status of ${name} has been changed!`);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <div
        className="App"
        style={{
          backgroundColor: '#eeeeee',
          padding: '10px',
          width: '60%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {users.map((user) => {
          return (
            <div>
              <UserTemplate user={user} onClickBtn={onClickBtn} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
