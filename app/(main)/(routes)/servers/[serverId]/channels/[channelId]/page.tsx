import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';
import { ChannelType } from '@prisma/client';
import { redirect } from 'next/navigation';
import React from 'react';
// import { ChatHeader } from '@/components/chat/chat-header';
// import { ChatInput } from '@/components/chat/chat-input';
// import { ChatMessages } from '@/components/chat/chat-messages';
// import { MediaRoom } from '@/components/media-room';

const ChannelIdPage = () => {
  return <div>ChannelIdPage</div>;
};

export default ChannelIdPage;
