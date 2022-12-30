import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (e) => {
    console.log(e);
    alert("버튼이 클릭됨");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar image="https://images.unsplash.com/photo-1672318995271-264173219d70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      <Profile
        image="https://images.unsplash.com/photo-1672318995271-264173219d70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        name="James Kim"
        title="프론트엔드 개발자"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        name="Anna Young"
        title="백엔드 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80"
        name="Bob yu"
        title="프론트엔드 개발자"
      />
    </>
  );
}

export default AppProfile;
