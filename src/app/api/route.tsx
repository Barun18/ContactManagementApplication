import { NextResponse } from 'next/server'
import React from 'react'

export const GET = () => {
  return NextResponse.json({
    message: " Hello, This is an Api route",
    status: "success"
} )
}

