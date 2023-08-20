import React, { useState } from "react";
import objects from "../../static/data/objects.json";
import styles from "../../styles/Members.module.css";
const Members = () => {
  const [member, setMember] = useState(objects.objects);
  // console.log(member);
  // let i = 1;
  // setInterval(() => {
  //   let nnn = Math.floor(Math.random() * 10000);
  //   setMember((member) => [
  //     ...member,
  //     {
  //       name: "Emma" + nnn,
  //       image: `https://avatars.dicebear.com/api/human/{nnn}.svg`,
  //       job: "Data Scientist",
  //     },
  //   ]);
  // }, 3000);

  return (
    <div id={styles.mem}>
      <div id={styles.secTitle}>members</div>
      {/* <div id={styles.Mbtn}>
        <div id={styles.Mbleft}>
          <div id={styles.Mbrs}>All Members</div>
        </div>
        <div id={styles.Mbright}>
          <div id={styles.Mbrs}>Last Active</div>
        </div>
      </div> */}

      <div id={styles.memGrid}>
        {member.map((m) => (
          <div id={styles.mCard} key={m.name}>
            <div id={styles.mCdDp}>
              <img src={m.image} alt={m.name} />
            </div>
            <div id={styles.pName}>{m.name}</div>
            <div id={styles.pPost}>{m.job}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
