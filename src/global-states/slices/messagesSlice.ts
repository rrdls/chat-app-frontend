import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import env from '../../config/env'

type Message = {
  message: string
  name: string
  timestamp: string
  received: boolean
}

export const postMessage = createAsyncThunk(
  'messages/postMessage',
  async (newMessage: Message, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3333/api/v1/messages', {
        method: 'POST',
        body: JSON.stringify(newMessage),
        headers: {
          'Content-Type': 'application/json'
        }
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
    messages: []
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages = [...state.messages, action.payload]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadMessages.fulfilled, (state, action) => {
      state.messages = action.payload
    })
    builder.addCase(loadMessages.rejected, (state, action) => {
      throw new Error(action.error.message)
    })
  }
})

export const { addMessages } = messagesSlice.actions
export default messagesSlice.reducer
