import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import * as Style from "./index.styled";
import { FaStar } from 'react-icons/fa';

const Film: React.FC<MovieList> = (props) => {
  return (
    <Style.Film>
      <Link href={`/films/${props.id}`}>
        <Style.Content>
          <Style.Cards>
            <Style.Card1
              src={
                props.large_cover_image
                  ? props.large_cover_image
                  : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
              }
              alt={props.large_cover_image}
            ></Style.Card1>

            <Style.Card2>
              <Style.Rating>
                <Style.RatingIcon>
                  <FaStar/>
                </Style.RatingIcon>
                <Style.RatingText> {props.rating} / 10</Style.RatingText>
              </Style.Rating>

              {props.genres ? (
                <Style.Genres>
                  {0 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[0].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {1 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[1].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {2 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[2].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                </Style.Genres>
              ) : (
                ""
              )}

              <Style.Details>DETAILS</Style.Details>
            </Style.Card2>
          </Style.Cards>

          <Style.Name>{props.title}</Style.Name>

          <Style.Text>
            {props.year} {props.language}
          </Style.Text>
        </Style.Content>
      </Link>
    </Style.Film>
  );
};

export default Film;
