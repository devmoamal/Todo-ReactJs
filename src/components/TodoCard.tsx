type ToDoCardProps = {
  title: string;
};

export const ToDoCard = (props: ToDoCardProps) => {
  return (
    <div className="bg-white flex flex-row justify-between items-center">
      <div className="p-4 border m-4 rounded-2xl">
        <p>{props.title}</p>
      </div>
      <div className="p-4 border m-4 rounded-2xl">
        <p>x</p>
      </div>
    </div>
  );
};
