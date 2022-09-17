function NewExercise({ children, msg, flexType }) {
  return (
    <div
      className={`mt-8 mb-8 border-b-gray-800 border-b-8 bg-white dark:bg-gray-800 dark:border-b-gray-400`}
    >
      <h2 className="bg-gray-800 text-white text-xl p-4 text-center dark:bg-gray-400">
        {msg}
      </h2>
      <div
        className={`flex ${flexType} items-center justify-items-center justify-center p-8`}
      >
        {children}
      </div>
    </div>
  );
}

export default NewExercise;
