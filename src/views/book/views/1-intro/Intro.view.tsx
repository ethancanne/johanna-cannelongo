import { component$ } from '@builder.io/qwik';
import styles from './Intro.module.scss';
import Arrow from '@/static/arrow.svg';
import hopesGardenSong from '../../../../data/hopesGardenSong.json';
import markdown from '../../../../utils/markdown.js';

export default component$(() => {
  return (
    <div class={styles.container}>
      <div class={styles.descriptionContainer}>
        <h1 class={styles.title}>Hope's Garden Song</h1>
        <p class={styles.quote}>A powerful allegory</p>
        <div
          class={styles.introText}
          dangerouslySetInnerHTML={markdown(hopesGardenSong.introText)}
        ></div>

        <a href={hopesGardenSong.bookLink.url} class={styles.button}>
          {hopesGardenSong.bookLink.text}
        </a>
        <div
          class={styles.arrow}
          onClick$={() => {
            const element = document.getElementById('bookDescription');
            element!.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img src={Arrow} width={50} height={50} alt="Scroll Down" />
        </div>
      </div>

      <div
        class={styles.imageContainer}
        style={{
          backgroundImage: `url("${hopesGardenSong.firstFeaturedIllustration}")`,
        }}
      >
        <div class={styles.wave}>
          <img src="/images/wave-1.png" alt="" />
        </div>

        <img
          loading="lazy"
          width="300"
          height="400"
          role="presentation"
          class={styles.image}
          src="/images/bookFront.webp"
          alt="Hope's Garden Song"
        />
      </div>
    </div>
  );
});
