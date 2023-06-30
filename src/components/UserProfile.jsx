import React from "react";
const Profile = () => {  
  const user = {
    name: "Vijayaprasath Subramanian",
    imageUrl: 'https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg',
    imageSize: 120,
}
  return (
    <div>
        <h1>{user.name}</h1>
        <img src={user.imageUrl} alt={"Photo of" + user.name} style={{width: user.imageSize, height: user.imageSize}} />
        
    </div>
  )
}

export default Profile;