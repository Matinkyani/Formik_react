
const PersonalError = ({children}) => {
    return (
<small className="block rounded-lg bg-red-400/5 px-3 py-2 text-xs text-red-300">
      {children}
</small>
    );
};

export default PersonalError;