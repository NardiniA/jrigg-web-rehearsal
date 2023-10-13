import Link from "next/link";
import styles from "./index.module.scss";
import { getSettings } from "@/lib/getSettings";

const Share: React.FC<{ title: string; slug: string }> = async({ title, slug }) => {
  const { siteURL } = await getSettings();
  
  const url = `${siteURL}/recruitment/${slug}`;

  return (
    <section className={styles["recruitment-share"]}>
      <h4 className={styles["recruitment-share-title"]}>Share</h4>
      <ul className={styles["recruitment-share-list"]}>
        <li className={styles["recruitment-share-info"]}>
          <Link
            href={`http://www.facebook.com/share.php?u=${url}`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <i className="bx bxl-facebook-square"></i>
          </Link>
        </li>
        <li className={styles["recruitment-share-info"]}>
          <Link
            href={`https://twitter.com/intent/tweet?url=${url}`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
            <i className="bx bxl-twitter"></i>
          </Link>
        </li>
        <li className={styles["recruitment-share-info"]}>
          <Link
            href={`whatsapp://send?text=Check out this: ${url}`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z" />
            </svg>
          </Link>
        </li>
        <li className={styles["recruitment-share-info"]}>
          <Link
            href={`mailto:?body=Check out this: ${url}`}
            target="_blank"
            rel="nofollow noreferrer"
          >
            <i className="bx bxs-envelope"></i>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Share;
