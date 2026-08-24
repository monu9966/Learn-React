import { useState } from "react";


const user = {
  name: 'Hedy Lamarr',
  imgageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
    return (
        <div>
            <h1>Profile Card</h1>
            <p>Details</p>
            <p>My name is <strong>{user.name}</strong>.</p>
            <img className="m-5 h-30 w-30 rounded-full" src={user.imgageUrl} alt={'Photo of ' + user.name} />
        </div>
    )
}

export default Profile;