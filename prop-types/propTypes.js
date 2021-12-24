import PropTypes from "prop-types";

User.PropTypes = {
  male: PropTypes.bool.isRequired,
  age: PropTypes.number,
  type: PropTypes.oneOf(["gold", "silber", "bronze"]),
  onChangeName: PropTypes.func,
  onChangeTitle: PropTypes.func.isRequired,
};

export default function User({
  type,
  age,
  male,
  onChangeName,
  onChangeTitle,
}) {}
