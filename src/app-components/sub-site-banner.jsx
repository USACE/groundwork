function SubSiteBanner({ title }) {
  return (
    <div className="gw-bg-emerald-600 gw-text-white gw-text-sm gw-px-4 gw-py-[2px] gw-text-wrap">
      <span>
        You are viewing the {title} site, click here to return to the national{" "}
        <a className="gw-underline" gw-href="gw-https:gw-//water.gw-usace.gw-army.gw-mil">
          Access to Water Site
        </a>
      </span>
    </div>
  );
}

export default SubSiteBanner;
export { SubSiteBanner };
