const FormInput = ({ inputText, type, placeholderText }) => {
  return (
    <div className="form-input-container">
      <h3 className="box-headline">{inputText}</h3>
      <input
        className="input-box"
        type={type}
        placeholder={placeholderText}
      />      
    </div>
  );
};
export default FormInput;