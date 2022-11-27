import Head from "next/head";
import TagInput from "../components/TagInput";
import { GlobalStyle } from "../styles/GlobalStyle";
import { TagInputUiStyled } from "../styles/TagInputUI";
import { NEXT_URL } from "../config/config";
import type { Tag } from "../components/TagInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type HomeProps = {
  tags: Tag[];
};

export default function Home({ tags }: HomeProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Alibaba | Tag Input code challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <TagInputUiStyled>
        <TagInput tags={tags} />
      </TagInputUiStyled>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${NEXT_URL}/api/tags`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const tags = await res.json();

  return {
    props: { tags },
  };
}
