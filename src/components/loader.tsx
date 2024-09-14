import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className="bg-[#1E1E1E] min-h-screen flex items-center">
      <div id={styles.load} className="font-noto text-xl">
        <div></div>
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>N</div>
        <div>I</div>
        <div>F</div>
      </div>
    </div>
  );
}
