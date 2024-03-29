import api from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function CardTraining({ activeAttribute, openTableTrainingModal }) {
	const [articles, setArticles] = React.useState([]);
	const [tempArticles, setTempArticles] = React.useState([]);
	async function getArticles() {
    const response = await api.getArticleByAttribute(activeAttribute.id);
    console.log(response);
    setArticles(response);
    setTempArticles(response);
  }


	useEffect(() => {
		getArticles();
	}, [activeAttribute.id]);
	return (
		<div className="relative flex flex-row break-words gap-6 mx-6">
			<div className="flex flex-col justify-between w-full">
				<div className="flex flex-col bg-white mb-6 shadow-xl rounded-xl px-6 py-6 h-80 ">
					<div className="flex flex-row justify-between h-20">
						<h3 className=" font-semibold md:text-4xl">Training Recommendation</h3>
						<div className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold text flex align-middle">
							<button onClick={openTableTrainingModal} className="flex items-center">
								<span className="my-auto">View All</span>
							</button>
						</div>
					</div>
					<div className="flex flex-row gap-4 mt-6">
					{articles
  ? articles.slice(0, 5).map((article) => (
    <Link
      href={"/training/" + article?.article_id}
      className="flex-col text-center justify-center align-middle relative"
      key={article?.article_id}
    >
      <Image
        src={
          article?.article_thumbnail == null
            ? "/img/img-1-1000x600.jpg"
            : article?.article_thumbnail
        }
        width={200}
        height={600}
        className="h-48 w-80 rounded-xl filter brightness-75"
        alt=""
      />
      <h3 className="absolute text-left px-6 text-2xl font-semibold text-white bottom-4">
        {article?.article_title}
      </h3>
    </Link>
  ))
  : ""}

					</div>
				</div>
			</div>
		</div>
	);
}
