import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { setTextContent, truncateText } from './common'

// to use fromNow func
dayjs.extend(relativeTime)

export function createPostElement(post) {
  if (!post) return

  // find and clone template
  const postTemplate = document.getElementById('postTemplate')
  if (!postTemplate) return

  const liElement = postTemplate.content.firstElementChild.cloneNode(true)
  if (!liElement) return

  setTextContent(liElement, '[data-id="title"]', post.title)
  setTextContent(liElement, '[data-id="description"]', truncateText(post.description, 100))
  setTextContent(liElement, '[data-id="author"]', post.author)
  setTextContent(liElement, '[data-id="timeSpan"]', ` - ${dayjs(post.updateAt).fromNow()}`)

  const thumbnailElement = liElement.querySelector('[data-id="thumbnail"]')
  if (thumbnailElement) {
    thumbnailElement.src = post.imageUrl

    thumbnailElement.addEventListener('error', () => {
      thumbnailElement.src = 'https://via.placeholder.com/1368x400?text=thumbnail'
    })
  }

  // attach events

  return liElement
}

export function renderPostList(elementId, postList) {
  if (!Array.isArray(postList)) return
  const ulElement = document.getElementById(elementId)
  if (!ulElement) return

  // clear current list
  ulElement.textContent = ''

  postList.forEach((post, index) => {
    const liElement = createPostElement(post)
    ulElement.appendChild(liElement)
  })
}
