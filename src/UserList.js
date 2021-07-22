import React from "react";

//여러개의 컴퍼넌트 사용 가능(따로 빼줄수 있음), porps 로 user 값 받아오기
//{user}는 매개변수, 함수 호출될 때, 값을 전달받게 되면 매개변수에 값이 정의
function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>{user.email}</span>
    </div>
  );
}

function UserList() {
  //첫번째 컴퍼넌트
  const users = [
    {
      id: 1,
      username: "make",
      email: "make111@gmail.com"
    },
    {
      id: 2,
      username: "jane",
      email: "jane6988@gmail.com"
    },
    {
      id: 3,
      username: "john",
      email: "john244@gmail.com"
    }
  ];
  return (
    <div>
      {/* {users[0].username} 이런식으로 똑같은 코드 여러번 써주면 코드가 길어짐->새로운 컴퍼넌트 만들기 */}

      {/* 고정적일 땐 이렇게 넣어줘도 상관없음
        <User user={users[0]} />
        <User user={users[1]} />
        <User user={users[2]} /> */}

      {/* map 이용하여 객체 배열 형태로 있는 배열을 컴퍼넌트앨리먼트로 배열로 변형 */}
      {/* 함수를 만들어서 그 함수를 map 뒤에 넣어주면 각 원소들에 대해 함수 호출하고 새로운 배열 만듬 */}
      {/* 배열이름: user 라는 파라미터 가져와 User 컴퍼넌트 이용하여 렌더링 */}
      {/* key값이 없을 땐 고유의 index 값을 넣어줌(map에서 사용하는 2번째 콜백함수:index) */}
      {/* index 쓰면 안 좋은 이유: 몇번째 값인줄만 알고 어떤 값을 가르키는줄 모름. 새로운 값이 매겨짐 */}
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}
export default UserList;
