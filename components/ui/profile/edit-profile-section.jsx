import React from 'react';

function EditProfileSection({trans}) {
    return (
        <div className="w-full flex flex-wrap">
            <button
                className="w-full text-sky-500 active:scale-95 duration-300 font-bold border border-sky-200 p-2.5 rounded-xl flex items-center justify-center">
                {trans("Edit Profile")}
            </button>
        </div>
    );
}

export default EditProfileSection;