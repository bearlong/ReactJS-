import {useState, useEffect} from 'react'
import Link from 'next/link';


export async function getStaticProps() {
    return {
      props: {
        data: [
            {
              "id": 1,
              "title": "學習編程的樂趣",
              "content": "編程不僅能解決問題，還能激發創造力，讓你打造出屬於自己的應用程式。"
            },
            {
              "id": 2,
              "title": "健身的重要性",
              "content": "定期健身能增強體質，改善心理健康，讓你更加精力充沛。"
            },
            {
              "id": 3,
              "title": "旅遊的美好回憶",
              "content": "旅行讓我們開拓視野，感受不同文化，留下難忘的回憶。"
            },
            {
              "id": 4,
              "title": "閱讀的價值",
              "content": "閱讀能增長見識，提升思維能力，是自我成長的重要途徑。"
            },
            {
              "id": 5,
              "title": "環保生活方式",
              "content": "採用環保生活方式不僅有助於保護地球，也能提升生活品質。"
            },
            {
              "id": 6,
              "title": "學習新語言",
              "content": "學習新語言可以開啟新的世界，幫助我們更好地交流和理解他人。"
            },
            {
              "id": 7,
              "title": "音樂的治癒力量",
              "content": "音樂能舒緩壓力，提升情緒，成為我們生活中的良伴。"
            },
            {
              "id": 8,
              "title": "創意寫作的樂趣",
              "content": "創意寫作能激發想像力，讓我們的思想以全新的方式表達。"
            },
            {
              "id": 9,
              "title": "攝影的藝術",
              "content": "攝影不僅是技術，更是一種藝術表達，捕捉生活中的美好瞬間。"
            },
            {
              "id": 10,
              "title": "自我反思的重要性",
              "詳細內容": "定期進行自我反思能幫助我們了解自身，促進個人成長和改進。"
            }
          ], 
      },
    };
  }


export default function PostList({data}) {

  useEffect(() => {
    import('bootstrap/dist/css/bootstrap.min.css');
  }, []);
  return (
    <>
    <div className='container'>
        <h2 className='my-3'>文章列表</h2>
        <table className='table table-striped table-hover'>
        <thead>
            <tr>
              <th>ID</th>
              <th>標題</th>
            </tr>
        </thead>
        <tbody>
        {data.map((v) => {
            return (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td><Link href={`./postList/detail?id=${v.id}`}>{v.title}</Link></td>
                </tr>)
        })}
        </tbody>
        </table>
        </div>
    </>
  )
}
