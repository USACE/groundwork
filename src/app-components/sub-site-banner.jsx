function SubSiteBanner({ title }) {
  return (
    <div className="bg-emerald-600 text-white text-sm px-4 py-[2px] text-wrap">
      <span>
        You are viewing the {title} site, click here to return to the national{" "}
        <a className="underline" href="https://water.usace.army.mil">
          Access to Water Site
        </a>
      </span>
    </div>
  );
}

export default SubSiteBanner;
export { SubSiteBanner };
