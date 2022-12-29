const PracticeUserForm = ({
  user,
  handleChange,
  handleSubmit,
  editIndex,
  updateUser,
}) => {
  return (
    <div>
      <label for="lname">First name</label>
      <input
        type="text"
        name="fname"
        value={user.fname}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label for="lname">Last name</label>
      <input
        type="text"
        name="lname"
        value={user.lname}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label for="lname">Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {editIndex != null ? (
        <button type="button" onClick={updateUser}>
          Update user
        </button>
      ) : (
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};
export default PracticeUserForm;
