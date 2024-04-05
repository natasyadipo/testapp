import homeCSS from "./page.module.css";

export default function Home() {
  function add(a: number, b: number) {
    return a + b;
  }

  return (
    <div className={homeCSS.mainPageLayout}>
      <div className={homeCSS.pageNav}>NAVBAR</div>
      <div className={homeCSS.pageContent}>Hello im a content</div>
    </div>
  );
}
