/* eslint-disable react/prop-types */
const Mapping = ({ userData }) => {
  return (
    <>
      {userData.map((user) => {
        return (
          <div
            key={user}
            className="bg-white h-20 w-1/3 my-8 rounded-lg flex items-center">
            <div className="text-black flex flex-row border border-black w-full mx-4 py-1 pl-2 text-sm">
              <h1>{user.name}</h1>
              <p className="px-1">({user.age} years old)</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Mapping;
