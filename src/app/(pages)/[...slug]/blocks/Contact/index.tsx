import { Children } from "@/components/RichText/serialise";
import styles from "./index.module.scss";
import RichText from "@/components/RichText";

const Contact: React.FC<{
  section: { maps: string; details: Children };
  priority: boolean;
}> = ({ section: { maps, details } }) => (
  <section className="section">
    <div className="container">
      <div className="row">
        {!!maps && (
          <div className="column-half">
            <div className={styles["map"]}>
              <div className={styles["map-outer"]}>
                <div className={styles["gmap-canvas"]}>
                  <iframe
                    id="gmap_canvas"
                    src={maps}
                    title="J. Rigg Construction Offices"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
        {!!details?.length && (
          <div className="column-half">
            <RichText content={details} className={styles["contact-box"]} />
          </div>
        )}
      </div>
    </div>
  </section>
);

export default Contact;
