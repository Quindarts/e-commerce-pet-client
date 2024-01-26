const MyProfile = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    return (
        {user} && <>
            <div style={{padding:"50px"}}>
                Xin chào, {user.userName}
            </div>
        </>
    )
}
export default MyProfile;