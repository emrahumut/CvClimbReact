const Form = (formConfig) => {

  const submitForm = () => {};
  return (
    <div className="form-wrapper">
      <form onSubmit={submitForm}>
        {/* <label>
          İsim:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label> */}
      </form>
    </div>
  );
};
export default Form;
