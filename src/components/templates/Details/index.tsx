import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import { VscTrash } from "react-icons/vsc";
import { DeleteCommentButton } from './index.styled';

import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";

import React, { useState, useEffect } from 'react';
//localStorage.clear();
const Details = () => {
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );
  const [comments, setComments] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const filmId = filmRetrieve?.data?.movie?.id;

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      const allComments = JSON.parse(storedComments);
      const filmComments = filmId ? allComments[filmId] || [] : [];
      setComments(filmComments);
    } else {
      setComments([]);
    }
  }, [filmId]);
  


  const addComment = () => {
    if (inputValue.trim() !== '') {
      const filmId = filmRetrieve?.data?.movie?.id;
      if (filmId) {
        const storedComments = localStorage.getItem('comments');
        const allComments = storedComments ? JSON.parse(storedComments) : {};
  
        const filmComments = allComments[filmId] || [];
        const newComments = [...filmComments, inputValue];
  
        allComments[filmId] = newComments;
  
        localStorage.setItem('comments', JSON.stringify(allComments));
        setComments(newComments);
        setInputValue('');
      }
    }
  };

  const deleteComment = (index: number) => {
    const filmId = filmRetrieve?.data?.movie?.id;
    if (filmId) {
      const storedComments = localStorage.getItem('comments');
      const allComments = storedComments ? JSON.parse(storedComments) : {};
  
      const filmComments = allComments[filmId] || [];
      const newComments = [...filmComments];
  
      newComments.splice(index, 1);
  
      allComments[filmId] = newComments;
  
      localStorage.setItem('comments', JSON.stringify(allComments));
      setComments(newComments);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addComment();
    }
  };

  

  if (isLoading) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });
  const torrentsList = filmRetrieve?.data?.movie?.torrents?.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });


  const youtubeUrl = "https://www.youtube.com/embed/";
  const ytTrailerCode = filmRetrieve?.data.movie.yt_trailer_code;


  return (
    <Style.Details>
      <Style.BackgroundImage
        src={filmRetrieve?.data.movie.background_image_original}
      ></Style.BackgroundImage>
      <Style.Content>
        <Style.ContentTitle>
          <Link href={"/"}>Films / {filmRetrieve?.data.movie.title}</Link>
        </Style.ContentTitle>

        <Style.Data>
          <Style.Image>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>
          </Style.Image>
          <Style.Description>
            <Style.Title>{filmRetrieve?.data.movie.title}</Style.Title>

            <Style.Year>
              {filmRetrieve?.data.movie.year +
                " " +
                filmRetrieve?.data.movie.language}
            </Style.Year>

            <Style.Genres>{genresList}</Style.Genres>

            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full}
            </Style.DescriptionFull>

            <Style.Statistic>
              <StatisticItem
                icon={<VscStarFull />}
                text={filmRetrieve?.data.movie.rating}
              ></StatisticItem>
              <StatisticItem
                icon={<AiTwotoneLike />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<BiTimeFive />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              <StatisticItem
                icon={<VscDesktopDownload />}
                text={filmRetrieve?.data.movie.download_count}
              ></StatisticItem>
            </Style.Statistic>
            </Style.Description>
            </Style.Data>
            <Style.SecondPart>
              <Style.YTdiv>
                {ytTrailerCode && (
                  <Style.YouTubeTrailer src={youtubeUrl + ytTrailerCode}>
                  </Style.YouTubeTrailer>
                )}
              </Style.YTdiv>
              <Style.DownloadsDiv>
                <Style.TorrentsTitle>Downloads:</Style.TorrentsTitle>
                <Style.Torrents>{torrentsList}</Style.Torrents>
              </Style.DownloadsDiv>
              <Style.Comments>
                <Style.CommentsTitle>Comments:</Style.CommentsTitle>
                    <Style.CommentsBlock>
                      {comments.map((comment, index) => (
                        <Style.OneComment key={index}>
                          <Style.OneCommentText>{comment}</Style.OneCommentText>
                          <DeleteCommentButton
                          name={<VscTrash />}
                          action={() => deleteComment(index)}
                          />
                        </Style.OneComment>
                  
                      ))}
                    </Style.CommentsBlock>
                <Style.InputComment  
                  type="text" 
                  value={inputValue} 
                  onChange={(e) => setInputValue(e.target.value)} 
                  placeholder="Write a comment..."
                  onKeyDown={handleKeyDown}>
                </Style.InputComment>
                <Style.Buttons>
                  <Style.AddCommentButton onClick={addComment}>
                    Add comment
                  </Style.AddCommentButton>
                </Style.Buttons>
              </Style.Comments>
            </Style.SecondPart>
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
