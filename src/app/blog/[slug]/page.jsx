import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = ({params}) => {

  console.log(params)
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/post.jpeg" alt="" fill className={styles.img} />
        </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/avatar.jpeg"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>J. K. Rowling</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2021</span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti natus adipisci eligendi nam est, sed obcaecati esse, libero molestiae voluptates magni vitae nobis asperiores tempore, molestias facilis. Perferendis, culpa sit.</div>
      </div>
    </div>
  );
};

export default SinglePostPage;