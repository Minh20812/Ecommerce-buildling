const UserDetail = ({ product }) => {
  const { title } = product;
  return (
    <li className="py-3">
      <div>[Name: {title}]</div>
    </li>
  );
};

export default UserDetail;
