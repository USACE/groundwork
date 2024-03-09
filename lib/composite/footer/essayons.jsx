const base = import.meta.env.BASE_URL;

function Essayons() {
  return (
    <div
      className={`absolute bottom-[56px] left-[50%] h-[125px] w-[112px] ml-[-56px]`}
      style={{
        backgroundImage: `url(${base}essayonscrest.png)`,
      }}
    />
  );
}

export default Essayons;
export { Essayons };
