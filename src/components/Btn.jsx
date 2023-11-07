import React from "react";

const Btn = ({children,...props}) => <button {...props}>{children}</button>;
export default Btn;