function LearnJsxLooping() {
  const users = [{
    id: 1,
    name: "Sherlock Holmes",
    age: 25
  }, {
    id: 2,
    name: "James Bond",
    age: 30
  }, {
    id: 3,
    name: "Black Widow",
    age: 20
  }];

  return (
    <div>
      <BasicList users={users}/>
    </div>
  )
}

export default LearnJsxLooping;

function BasicList(props) {
  const users = props.users;
  const userList = users.map(user => <li key={user.id}>{user.name}</li>);

  const anotherList = [];
  for(let i = 0; i < users.length; i++) {
    anotherList.push(<li key={users[i].id}>{users[i].name}</li>)
  }

  return (
    <ul>
      {userList}
      {anotherList}
    </ul>
  )
}

