import React from 'react'
import { Helmet } from 'react-helmet'

function HelmetComponent({ title, canonical }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICMLDA, International Conference on Machine Learning and Data Analytics  ,Machine Learning, Data Analytics, Artificial Intelligence, Predictive Analytics, Data Science, Deep Learning, Neural Networks, Big Data, Smart Data Analysis, Data Mining, AI Models, Intelligent Systems, ML Algorithms, Statistical Learning, Computational Intelligence, Advanced Analytics, International Conference 2025, ML Research, AI and Data Science, Emerging Technologies" />
            <meta name="description" content="The International Conference on Machine Learning and Data Analytics 2025 brings together researchers, scholars, and industry experts to share the latest advances in machine learning models, data analysis techniques, and intelligent systems." />
            <meta name="author" content="ICMLDA Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Machine Learning and Data Analytics" />
            <meta property="og:description" content="The International Conference on Machine Learning and Data Analytics 2025 brings together researchers, scholars, and industry experts to share the latest advances in machine learning models, data analysis techniques, and intelligent systems." />
            <meta property="og:url" content="https://icmlda.com/" />
            <meta property="og:image" content="https://icmlda.com/assets/images/Logo.png" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://icmlda.com/assets/images/Fav .png" />

        </Helmet>
    )
}

export default HelmetComponent