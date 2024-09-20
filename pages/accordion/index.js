import {useState, useEffect} from 'react'

export default function Index() {
    const data =[
        {
          "id": 1,
          "title": "學習編程的重要性",
          "content": "編程是現代科技發展的核心技能之一。學會編程能幫助我們解決日常生活中的問題，並為未來職業生涯打下堅實的基礎。無論你是想進入科技行業，還是希望提升個人技能，學習編程都是不可或缺的一環。"
        },
        {
          "id": 2,
          "title": "健身與心理健康",
          "content": "健身不僅能幫助我們保持身體健康，還對心理健康有顯著影響。定期運動可以釋放壓力，改善情緒，增強自信心。研究表明，運動能促進大腦釋放內啡肽，讓人感到愉悅和放鬆。"
        },
        {
          "id": 3,
          "title": "環保生活方式的影響",
          "content": "選擇環保的生活方式不僅能保護地球，還能改善我們的生活品質。從減少塑料使用到選擇可再生能源，每個小行動都可以對環境產生積極影響。長期來看，這不僅有助於地球的永續發展，也能讓我們的生活更加健康和舒適。"
        },
        {
          "id": 4,
          "title": "閱讀的益處",
          "content": "閱讀是一種能幫助我們開拓視野、提升思維能力的活動。通過閱讀，我們可以學習到新的知識，深入理解不同的文化和觀點。無論是小說、科學文獻，還是自我成長書籍，閱讀都能豐富我們的心靈，提升自我。"
        },
        {
          "id": 5,
          "title": "旅行帶來的收穫",
          "content": "旅行讓我們暫時遠離日常生活，探索不同的世界和文化。無論是踏上新的國度，還是簡單的周末度假，旅行都能幫助我們放鬆心情，拓展視野。與不同文化交流能提升我們的包容性，並留下寶貴的回憶。"
        },
        {
          "id": 6,
          "title": "音樂對情緒的影響",
          "content內容": "音樂是一種強大的情緒工具。無論你是快樂、悲傷，還是感到壓力重重，適合的音樂都能幫助調整情緒。科學研究證實，音樂可以促進腦內化學物質的釋放，增強我們的幸福感。"
        },
        {
          "id": 7,
          "title": "創意寫作的樂趣",
          "content": "創意寫作讓我們的思想自由飛翔，無需局限於現實世界的規則。無論是小說、詩歌還是劇本，創意寫作能幫助我們以獨特的方式表達內心的想法和感受，激發無限的想像力。"
        },
        {
          "id": 8,
          "title": "攝影的藝術與技巧",
          "content": "攝影是一種結合藝術與技術的創作方式。透過鏡頭，我們可以捕捉生活中轉瞬即逝的美好時刻。無論是風景攝影還是人像攝影，光線、構圖和角度的運用都能創造出與眾不同的視覺效果。"
        },
        {
          "id": 9,
          "title": "學習新技能的過程",
          "content": "學習新技能是一個不斷挑戰自我、突破極限的過程。從初學者到精通者，我們需要持續不懈的努力與練習。無論是學習編程、語言還是樂器，新技能的習得能提升我們的自信，並開啟更多的機會。"
        },
        {
          "id": 10,
          "title": "時間管理的重要性",
          "content": "有效的時間管理是成功的關鍵。學會如何合理安排時間，平衡工作與生活，能讓我們的生活更加充實和有條不紊。通過制定計劃、設立優先事項，我們可以提高工作效率，並有更多的時間投入到自己喜愛的活動中。"
        }
      ]
      useEffect(() => {
        import('bootstrap/dist/css/bootstrap.min.css');
      }, []);
  return (
    <>
<div className='container'>
    <h2>文章列表</h2>
    {data.map((v) => {
        return (
            <div className='mb-3' key={v.id}>
            <label htmlFor={v.id} className={`title h5`}>{v.title}</label>
            <input type='checkbox' className='d-none' id={v.id}/>
            <div className='card mb-3'>
                <div className='card-body'>
                    <p className='card-text'>{v.content}</p>
                </div>
                </div>
            </div>
        )
    })}
</div>
<style jsx>
{
    `
    .card {
        max-height: 0;
        overflow: hidden;
        transition: 0.5s ;
border: 1px solid  transparent
    }
    input[type="checkbox"]:checked + .card {
        max-height: 300px;
        border: 1px solid #ccc;
    }
    `
}
</style>
    </>
  )
}
