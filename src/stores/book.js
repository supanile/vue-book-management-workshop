import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', {
  state: () => ({
    books: []
  }),
  actions: {
    addBook (book) {
      this.books.push(book)
    },
    updateBook (book, index) {
      this.books.splice(index, 1, book)
    },
    removeBook (index) {
      this.books.splice(index, 1)
    }
  }
})