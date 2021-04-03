import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import env from '../../config/env'

type Message = {
  message: string
  timestamp: string
}

type User = {
  user_id: string
  channel: string
  message: Message
}

export const postMessage = createAsyncThunk(
  'messages/postMessage',
  async (newMessage: User, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3333/api/v1/message', {
        method: 'POST',
        body: JSON.stringify(newMessage),
        headers: { 'Content-Type': 'application/json' }
      })
      if (!response.ok) {
        const error = await response.json()
        return rejectWithValue({ error: error.errors })
      }
      return response.json()
    } catch (error) {
      return rejectWithValue({ error: error.message })
    }
  }
)

export const loadMessages = createAsyncThunk(
  'messages/loadMessages',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3333/api/v1/messages')
      return response.json()
    } catch (error) {
      return rejectWithValue({ error: error.message })
    }
  }
)

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    postMessageIsLoading: false,
    loadMessagesIsLoading: false
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages = [...state.messages, action.payload.message]
      state.postMessageIsLoading = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadMessages.fulfilled, (state, action) => {
      state.messages = action.payload
      state.loadMessagesIsLoading = false
    })
    builder.addCase(loadMessages.rejected, (state, action) => {
      console.log(action.error.message)
      // throw new Error(action.error.message)
    })
    builder.addCase(loadMessages.pending, (state, action) => {
      state.loadMessagesIsLoading = true
    })
    builder.addCase(postMessage.pending, (state, action) => {
      state.postMessageIsLoading = true
    })
  }
})

export const { addMessages } = messagesSlice.actions
export default messagesSlice.reducer
