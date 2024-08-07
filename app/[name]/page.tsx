"use client";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState, useContext, useEffect, useCallback } from "react";
import { ThemeContext } from "../components/Provider";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { PanelRightClose, Maximize, Columns, Link } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import ProviderFlow from "../components/ReactFlow";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Label } from "@radix-ui/react-label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "../globals.css";
import type { SVGProps } from "react";
import { usePathname, useSearchParams } from 'next/navigation';
import Editor from "../Editor/editor";
import { useGlobalState } from '../home/page';

const initialNodes = { 

  pages:[
    {
    id: "1",
    position: { x: 0, y: 10 },
    data: {
      label: "Prerequisites",
      icon: '🧠',
      description: `
    <h3 style="width: 424px; font-size: 2em; font-weight: bold; margin-bottom: 1em;">Popular Math Books</h3>
    

<p style="font-size: 1rem;">Before you dive into the more formal and difficult coursework, you might find it helpful or fun to read some books about mathematics and mathematicians that are a little more accessible than many of the textbooks you will find in the curriculum that follows.</p>

<p style="margin-bottom: 2em;">Here are a handful of my favorite popular mathematics books, ranked in order of difficulty:</p>


  <p style="margin-bottom: 1.5em;"><strong>e: The Story of a Number</strong> by Eli Maor (Level: Easy). A fun, accessible book that will get you excited about mathematics.</p>
 
  <p style="margin-bottom: 1.5em;"><strong>The Joy Of X: A Guided Tour of Math, from One to Infinity</strong> by Steven H. Strogatz (Level: Easy). A lot of fun to read, but make sure you get the paperback or hardcover version for readability purposes.</p>
 
  <p style="margin-bottom: 1.5em;"><strong>Fermat’s Enigma</strong> by Simon Singh (Level: Easy). A beautifully-written book about Fermat’s Last Theorem.</p>
  
  <p style="margin-bottom: 1.5em;"><strong>The Man Who Loved Only Numbers</strong> by Paul Hoffman (Level: Easy). A compulsively-readable biography of Paul Erdős.</p>
 
  <p style="margin-bottom: 1.5em;"><strong>The Man Who Knew Infinity</strong> by Robert Kanigel (which was also made into a film) (Level: Easy). A wonderful biography of Srinivasa Ramanujan.</p>
 
  <p style="margin-bottom: 1.5em;"><strong>Flatland</strong> by Edwin A. Abbott (Level: Easy). A classic. I highly recommend the annotated version, which adds extra joy to the reading experience.</p>
  
  <p style="margin-bottom: 1.5em;"><strong>A Mathematician’s Apology</strong> by G.H. Hardy (Level: Medium). One of the most beautiful things ever written about mathematics, by one of the greatest mathematicians of all time.</p>
  
  <p style="margin-bottom: 1.5em;"><strong>Fearless Symmetry</strong> by Avner Ash and Robert Gross (Level: Difficult). One of my all-time favorites.</p>
  
  <p style="margin-bottom: 1.5em;"><strong>Proofs from THE BOOK</strong> by Martin Aigner and Günter M. Ziegler (Level: Difficult). This book is an absolute joy to read in small bits and pieces. The more math you learn, the more you will fall in love with it.</p>


    `,
        links: [
          {
            linkName: "Link 1",
            link: " ",
          },
        ],
      },

      notes: [
        {
          notesId: "1",
          title: "Very hi note!",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! ",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",

          links: [
            {
              linkName: "Link 2",
              link: " ",
            },
            {
              linkName: "Link 2.1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "1",
          title: "NOTES",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen!  Woah more text, I never thought",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 2",
              link: " ",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],

      resources: [
        {
          resourceId: "1",
          title: "e: The Story of a Number",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "book",
          source: "Eli Maor",
          imageUrl: "",
          links: [
            {
              linkName: "Link 2",
              link: " ",
            },
            {
              linkName: "Link 2.1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "1",
          title: "The Joy Of X: A Guided Tour of Math, from One to Infinity",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "Book|Link",
          source: "Steven H. Strogatz",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 2",
              link: " ",
            },
          ],
        },
        {
          resourceId: "1",
          title: "Fermat’s Enigma",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: " Book|Link ",
          source: "Simon Singh",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "1",
          title: "The Man Who Loved Only Numbers",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "Book|Link",
          source: "Paul Hoffman",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "1",
          title: "The Man Who Knew Infinity",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "Book|Link",
          source: "Robert Kanigel",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",

          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "1",
          title: "Flatland",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "Book|Link",
          source: "Edwin A. Abbott",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D ",
            },
          ],
        },
        {
          resourceId: "1",
          title: "A Mathematician’s Apology",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "G.H. Hardy",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "1",
          title: "Fearless Symmetry",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "Avner Ash and Robert Gross",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "1",
          title: "Proofs from THE BOOK",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: " Martin Aigner and Günter M. Ziegler",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
    },

    {
      id: "2",
      position: { x: 200, y: 200 },
      data: {
        label: "High School Mathematics",
        icon: '🧠',
        description: `<p>A high school education — which should include pre-algebra, algebra 1, geometry, algebra 2, and trigonometry — is sufficient. If you need a refresher or if you are unfamiliar with the material, I recommend either working through the Khan Academy math courses (https://www.khanacademy.org/) or the book <strong> Why Math?</strong by R.D. Driver.</p> `,
        links: [
          {
            linkName: "Link 2",
            link: " ",
          },
          {
            linkName: "Link 2.1",
            link: " ",
          },
        ],
      },
      notes: [
        {
          notesId: "2",
          title: "Very important note!",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! Many more text to see if the 3 dots is working properly",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "2",
          title: "Another cool note with no image though.",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! This is the actual note. Cool isn’t it? Woah more text, I never thought",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: "",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],
      resources: [
        {
          resourceId: "2",
          title: "Basic Algebra",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",

          type: "",
          source: "Anthony W. Knapp",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: "",
            },
          ],
        },
        {
          resourceId: "2",
          title: "Trigonometry",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "I.M. Gelfand, Mark Saul",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
    },
    {
      id: "3",
      position: { x: 0, y: 200 },
      data: {
        label: "Calculus",
        icon: '🧠',
        description: ` <p>In a nutshell, calculus is the study of change. Just like almost every undergraduate mathematics student, you will probably spend a good deal of your mathematics education studying calculus: most undergraduate math majors take two full years of calculus courses (not including precalculus or any other prerequisites) — a four-course series with names like “Calculus 1,” “Calculus 2",” etc. — and then study calculus again when, later, they study analysis. You may find that you can work through this first course much more quickly than that, but don’t be discouraged if it takes you one or more years to get through the textbook. You may also find calculus difficult, especially if you’ve never studied it before; part of the difficulty sometimes comes from the foreignness of the material (it can take a while for your brain to get used to it), and the rest of the difficulty stems from the fact that it can be a challenging subject to learn! Take your time, do as many problems as you can, and keep going. (Note: if you do end up finding calculus too difficult, make sure you go back to high school algebra and precalculus and cover everything you might have missed or not understood very well.)</p>
           
            <h2 style="font-size: 2em; font-weight: bold; margin-top: 1em;">Reading</h2>
            
          <p><strong>Calculus: Early Transcendentals, 8th Edition</strong> by James Stewart (essential). This is an excellent textbook and it is a classic for a reason. Everything you need to know about undergraduate calculus is in this book. Everything. It contains excellent problems, good examples, and straightforward explanations. There is also a Student Solutions Manual that you may find very useful. The earlier editions of the book are just as good as this one — just make sure you are able to find the corresponding solutions manual. (Note: I also frequently recommend <strong>Thomas’ Calculus</strong>, which is also excellent, but I have lately found myself preferring Stewart; both books are fantastic and they each have their nuances and quirks — if you find you don’t like one, give the other a try.)</p>
          <p><strong>Calculus Made Easy</strong> by Silvanus P. Thompson and Martin Gardner (supplement). This is such a wonderful, thoughtful book. I recommend reading it alongside Stewart when you are just getting started — it may help you make sense of what you’re learning.</p>
           
           <h2 style="font-size: 1.5em; font-weight: bold;">Additional Material</h2>
          
          <p>When I was a student at Penn, the most useful mathematics courses I took were ones that I snuck into (some of them I couldn’t enroll in because I didn’t have the necessary prerequisites, others because they were too full and I couldn’t register). My favorite secret classes were the calculus courses taught by Robert Ghrist. He had a way of explaining concepts in calculus that made them just click for me. He also lectured with this really infectious energy that made me strongly reconsider my devotion to physics — I’d leave his lectures wanting to devote my whole life to mathematics. Luckily, you don’t have to sneak into his classes to listen to his lectures, since he now offers them for free online through Coursera: (1) Calculus: Single Variable Part 1 - Functions, (2) Calculus: Single Variable Part 2 - Differentiation, (3) Calculus: Single Variable Part 3 - Integration, (4) Calculus: Single Variable Part 4 - Applications. I highly recommend his lectures — they pair well with Stewart’s Calculus and they will stick in your head for many, many years.</p>
      `,
        links: [
          {
            linkName: "Link 2",
            link: " ",
          },
          {
            linkName: "Link 2.1",
            link: " ",
          },
        ],
      },
      notes: [
        {
          notesId: "3",
          title: "Advanced Maths",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! ",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "3",
          title: "Precalculus",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! This is the actual note. Cool isn’t it? Woah more text, I never thought",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],
      resources: [
        {
          resourceId: "3",
          title: "Why Math?",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "R.D. Driver",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "3",
          title: "Precalculus with Calculus Previews",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "Dennis G. Zill, Jacqueline M. D",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: "",
            },
          ],
        },
      ],
    },
    {
      id: "4",
      position: { x: -200, y: 200 },
      data: {
        label: "Precalculus",
        icon: '🧠',
        description: `<strong>Precalculus with Calculus Previews </strong> by Dennis G. Zill and Jacqueline M. Dewar is a very comprehensive, well-written book (like every one of Zill’s wonderful textbooks!). If you haven’t taken a precalculus course or studied precalculus before, I recommend working through the entire book and getting comfortable with the concepts before moving onto the calculus course that kicks off our math curriculum. You can supplement this textbook with the Khan Academy Precalculus course if needed.  `,
        links: [],
      },
      notes: [
        {
          notesId: "4",
          title: "Very important note!",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! ",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "4",
          title: "Another cool note with no image though.",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! This is the actual note. Cool isn’t it? Woah more text, I never thought.",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],
      resources: [
        {
          resourceId: "4",
          title: "Precalculus: Mathematics for Calculus",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "James Stewart, Lothar Redlin, and Salee",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "4",
          title: "Precalculus Mathematics in a Nutshell: Geo",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "George F. Simmons",
          imageUrl:
            "https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
    },
    {
      id: "5",
      position: { x: 0, y: 300 },
      data: {
        label: "Introduction to Proofs",
        icon: '🧠',
        description: `<p>Much (if not all) of advanced mathematics (i.e., things beyond high school math and introductory calculus) is not about calculating things or solving problems but about proving things. Proving is very different than calculating or solving, and there is an entire toolkit you’ll need before moving on to more advanced courses. Here, you’ll become familiar with mathematical reasoning, will learn how to read and write proofs, and will start learning to think like a mathematician.</p>
        
        <h2 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Reading</h2>
       
       <p><strong>How to Prove It: A Structured Approach</strong> by Daniel J. Velleman (essential). This book is a classic for a reason. Read it carefully, and keep it in a handy, readily-accessible place so that you can use it as a reference down the line. Supplement with <strong>How to Solve It</strong> by G. Polya and <strong>Introduction to Mathematical Thinking</strong>   by Keith Devlin.</p>`,
        links: [],
      },
      notes: [
        {
          notesId: "5",
          title: "Advanced Maths",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! ",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "5",
          title: "Precalculus",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! This is the actual note. Cool isn’t it? Woah more text, I never thought",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],
      resources: [
        {
          resourceId: "5",
          title: "Why Math?",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "R.D. Driver",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "5",
          title: "Precalculus with Calculus Previews",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "Dennis G. Zill, Jacqueline M. D",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
    },
    {
      id: "6",
      position: { x: 0, y: 400 },
      data: {
        label: "Linear Algebra",
        icon: '🧠',
        description: `<p>In this class, you’ll learn how to solve systems of linear equations. You’ll cover real and complex vector spaces, eigenvalues and eigenvectors, determinants, linear transformations, applications of linear algebra, and more. I found linear algebra to be incredibly fun to learn, and I hope you will too!</p>
       
        <h2 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Reading</h2>
        
        <p><strong>Introduction to Linear Algebra, Fifth Edition</strong> by Gilbert Strang (essential). This is a wonderful textbook, and I have found it especially accessible for independent study. Gilbert Strang posted the solutions to the textbook’s problems on his website, and he regularly updates the site with new materials.   </p>`,
        links: [],
      },
      notes: [
        {
          notesId: "6",
          title: "Advanced Maths",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! ",

          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "6",
          title: "Precalculus",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! This is the actual note. Cool isn’t it? Woah more text, I never thought",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],
      resources: [
        {
          resourceId: "6",
          title: "Why Math?",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "R.D. Driver",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "6",
          title: "Precalculus with Calculus Previews",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "Dennis G. Zill, Jacqueline M. D",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
    },
    {
      id: "7",
      position: { x: 0, y: 500 },
      data: {
        label: "Algebra",
        icon: '🧠',
        description: `<p>In abstract (or “modern”) algebra, you’ll learn about algebraic structures like groups, fields, rings, and more. You’ll study basic group theory, ring theory, field theory, Galois theory, algebraic geometry, and more (you’ll also learn more about vector spaces). Algebra is not for the faint of heart, and you’ll need to be comfortable with proofs and be prepared to take it slow. Most mathematics undergraduate programs will have a two-semester (one full year) abstract algebra program, and mathematics graduate programs will then spend another entire year studying the same things over again, so be prepared to spend at least that much time and energy. The good news is that it is very much worth the time and effort — don’t get discouraged!</p>
        
       <h2 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Reading</h2>
       
      <p> <strong>Abstract Algebra, 3rd Edition,</strong> by David S. Dummit and Richard M. Foote. This absolutely enormous book may seem overwhelming at first, but once you jump in, you’ll find that it’s huge because it’s incredibly detailed, filled with examples and exercises, and relatively straightforward to follow once you get used to it. It’s worth reading and studying carefully, and don’t be afraid to take your time — remember that many full-time math students will study this for at least an entire academic year as part of a two-semester (sometimes even three-semester) advanced undergraduate or beginning graduate course in abstract algebra. You don’t need to read the entire thing unless you’re so inclined — I would recommend working your way up to Chapter 9 if you can. </p>
       
       <h3 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Additional Material</h3>
      
      <p> Benedict Gross, who is a professor of mathematics at Harvard, taught a truly wonderful course on abstract algebra at the Harvard Extension School and made his lecture videos, notes, and problem sets available online for free to the public. The school has since taken the course down, but you can still access it using the Wayback Machine (there are also some lectures on YouTube). His lectures and course materials are a nice supplement to the textbook by Dummit and Foote. </p>`,
        links: [],
      },
      notes: [
        {
          notesId: "7",
          title: "Advanced Maths",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen!",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "7",
          title: "Precalculus",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! This is the actual note. Cool isn’t it? Woah more text, I never thought",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],
      resources: [
        {
          resourceId: "7",
          title: "Why Math?",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "R.D. Driver",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "7",
          title: "Precalculus with Calculus Previews",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "Dennis G. Zill, Jacqueline M. D",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
    },
    {
      id: "8",
      position: { x: 0, y: 600 },
      data: {
        label: "Real Analysis",
        icon: '🧠',
        description: `<p> Mathematical analysis is divided into two groups: real analysis and complex analysis, which are the study of the real numbers and real functions and the complex numbers and complex functions, respectively. To jump into real analysis, you’ll need the four semesters (two years) of foundational calculus courses as well as the familiarity with proofs that you’ll get from abstract algebra (however, I think you could start studying real analysis after working through the first chapter of Dummit and Foote, and study the two topics in parallel if you really wanted to).</p>
       
         <h2 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Reading</h2>
       
        <strong>Understanding Analysis, Second Edition,</strong> by Stephen Abbott (essential). This book is quite good. Not only does Abbott explain the concepts, he explains the history, the importance, the meaning behind everything, every step along the way. Study this alongside Rudin, and supplement with Spivak.  
        

<strong>Principles of Mathematical Analysis,</strong>. by Walter Rudin (essential). This book is also known as “baby Rudin” to contrast it with his more advanced (graduate-level) textbook, Real and Complex Analysis. Study this alongside Abbott, supplement with Spivak.


If you haven’t gotten your fill of real analysis, I highly recommend Michael Spivak’s <strong>Calculus</strong>z and the accompanying <strong>Answer Book.</strong> Spivak has a way of explaining things that I have found very useful. It’s easy to get stuck and confused when trying to learn math (especially when you’re learning it on your own!), and one trick I’ve discovered that helps me keep going is picking up another book and seeing how that author explains a particular concept that confused me. `,

        links: [],
      },
      notes: [
        {
          notesId: "8",
          title: "Advanced Maths",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! ",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "8",
          title: "Precalculus",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! This is the actual note. Cool isn’t it? Woah more text, I never thought",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],
      resources: [
        {
          resourceId: "8",
          title: "Why Math?",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "R.D. Driver",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "8",
          title: "Precalculus with Calculus Previews",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "Dennis G. Zill, Jacqueline M. D",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
    },
    {
      id: "9",
      position: { x: 0, y: 700 },
      data: {
        label: "Complex Analysis",
        icon: '🧠',
        description: `Complex analysis is the study of complex numbers and their functions. I enjoyed studying real analysis as much as one can, but — but!! — I absolutely loved complex analysis. Don’t jump into complex analysis until you’ve spent time studying real analysis and its prerequisites.
     
      <h2 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Reading</h2>
      
      <strong>Complex Analysis, Third Edition,</strong> by Joseph Bak and Donald J. Newman (essential).  This is a very good book but you may find it too bare-bones to study on its own. Read alongside Zill and Shanahan and supplement with Needham if necessary.
      

<strong>Complex Analysis: A First Course with Applications</strong> by Dennis G. Zill and Patrick D. Shanahan (essential). Just like Zill’s other (amazing) textbooks, this book is geared toward undergraduate physics and engineering students rather than math majors, which makes it ideal for independent study. (However, if you find yourself able to follow Bak & Newman with no issues, then feel free to skip this one.)


<strong>Visual Complex Analysis,</strong> by Tristan Needham (supplement). This book is pure magic. I found it especially useful when studying physics and trying to learn the required and necessary math on the side.

<h2 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Additional Material</h2>

Wesleyan has a free Coursera class on complex analysis that you may find a helpful supplement to the textbooks. (As of the date of publication of this math guide (03/06/2022), there was a course starting on 02/26/22.)`,

        links: [],
      },
      notes: [
        {
          notesId: "9",
          title: "Advanced Maths",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen!",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "9",
          title: "Precalculus",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! This is the actual note. Cool isn’t it? Woah more text, I never thought",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: "",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],
      resources: [
        {
          resourceId: "9",
          title: "Why Math?",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "R.D. Driver",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "9",
          title: "Precalculus with Calculus Previews",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "Dennis G. Zill, Jacqueline M. D",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
    },
    {
      id: "10",
      position: { x: 0, y: 800 },
      data: {
        label: "Ordinary Differential Equations",
        icon: '🧠',
        description: `In this class, you’ll learn about ordinary differential equations — what they are, how to solve them, and how they are used to model the physical world. You can study ODEs in this part of the sequence (as the second-to-last course in the curriculum) or you can jump in right after you’ve studied calculus or calculus + linear algebra — it’s totally up to you. (I should note that if you are also studying physics and engineering on the side, I do recommend studying ODEs sooner rather than later because of how important they are for physics and engineering, but that’s not necessary if you’re only studying math.)
      
      <h2 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Reading</h2>
      
      <strong>Ordinary Differential Equations</strong> by Morris Tenenbaum and Harry Pollard (essential). This delightful book has pretty much everything you need. If you feel like you want more problems/exercises to solve, you can supplement with Blanchard et. al.
      
      

<strong>Differential Equations</strong> by Paul Blanchard, Robert L. Devaney, and Glen R. Hall (supplement). If you want more exercises and explanations, I suggest checking this one out. It’s a pretty solid book, and it has a Student Solutions Manual.

<h3 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Additional Material</h3>

There’s a fantastic series of video lectures from Arthur Mattuck’s ODE course on MIT OCW. They go well with Tenenbaum and Pollard, and they even go beyond it in ways that are really fun.  `,
        links: [],
      },
      notes: [
        {
          notesId: "10",
          title: "Advanced Maths",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! ",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "10",
          title: "Precalculus",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! This is the actual note. Cool isn’t it? Woah more text, I never thoug",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],
      resources: [
        {
          resourceId: "10",
          title: "Why Math?",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "R.D. Driver",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "10",
          title: "Precalculus with Calculus Previews",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "Dennis G. Zill, Jacqueline M. D",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
    },
    {
      id: "11",
      position: { x: 0, y: 900 },
      data: {
        label: "Partial Differential Equations",
        icon: '🧠',
        description: `You’ve made it this far, and now you get to study PDEs, which are just completely magical and incredible and model the most important things in the world around us. Here, you’ll study what PDEs are and learn all about Fourier Series and harmonic functions and Green’s Identities and Green’s Functions, and so, so much more. 
      
      <h2 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Reading</h2>
      
      <strong>Partial Differential Equations: An Introduction</strong> by Walter A. Strauss (essential). You can get the Student Solutions Manual, too. When you’ve finished this book, it’s worth diving into Tolstov. 
      
      

<strong>Fourier Series</strong> by Georgi P. Tolstov (essential). This is probably my favorite math book of all time. It’s just incredible. I envy you for getting to read it for the first time!

<h2 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Additional Material</h2>

There’s a fantastic series of video lectures from Arthur Mattuck’s ODE course on MIT OCW. They go well with Tenenbaum and Pollard, and they even go beyond it in ways that are really fun.  
`,
        links: [],
      },
      notes: [
        {
          notesId: "11",
          title: "Advanced Maths",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen!",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "11",
          title: "Precalculus",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! This is the actual note. Cool isn’t it? Woah more text, I never thought.",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],
      resources: [
        {
          resourceId: "11",
          title: "Why Math?",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "R.D. Driver",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "11",

          title: "Precalculus with Calculus Previews",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "Dennis G. Zill, Jacqueline M. D.",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
    },

    {
      id: "12",
      position: { x: 0, y: 1000 },
      data: {
        label: "Electives",
        icon: '🧠',
        description: `Now that you understand all of the fundamentals of undergraduate mathematics, you have a solid foundation and can study more advanced and specialized topics. There is so, so much to be discovered and so much joy to be found. Good luck :) 
      
      <h2 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Some Recommendations</h2>
      
       <p><strong>Any and every topic imaginable:</strong> Springer publishes a few amazing mathematics series that you should be familiar with: <strong>Undergraduate Texts in Mathematics (UTM), Springer Undergraduate Mathematics Series (SUMS), Graduate Texts in Mathematics (GTM), and Texts in Applied Mathematics (TAM).</strong> There is a volume for any and every topic imaginable, and I have loved every book I’ve studied. You can pick and choose based on your interests. I recommend staying with books from the UTM and SUMS series until you’ve finished courses 1-8 of this curriculum, and then you can start studying books from the GTM and TAM series.</p>
          <p><strong>Discrete Mathematics:
          Discrete Mathematics with Applications</strong> by Susanna S. Epp.</p>
         
          <p><strong>History of Mathematics:
          A History of Mathematics</strong> by Carl B. Boyer and Uta C. Merzbach.</p>
           
          <p><strong>Number Theory:
          Read A Friendly Introduction to Number Theory</strong> by Joseph H. Silverman alongside <strong>An Introduction to the Theory of Numbers</strong> by G.H. Hardy and E.M. Wright.</p>
          
          <p><strong>Philosophy of Mathematics:
          Thinking about Mathematics: The Philosophy of Mathematics</strong> by Stewart Shapiro, <strong>Philosophies of Mathematics</strong> by Alexander George and Daniel J. Velleman, and <strong>Philosophy of Mathematics: Selected Readings</strong>. Supplement with <strong>On Formally Undecidable Propositions of Principia Mathematica and Related Systems</strong> by Kurt Gödel and <strong>Gödel's Proof</strong> by Ernest Nagel and James Newman.</p>
          <h2 style="font-size: 10em; font-weight: bold; margin-top: 1em;">Topology</h2>
          <p><strong>Experiments in Topology</strong> by Stephen Barr and <strong>Topology</strong> by James Munkres.</p>
        `,
        links: [],
      },
      notes: [
        {
          notesId: "12",
          title: "Advanced Maths",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen!",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "03 jan 24",
        },
        {
          notesId: "12",
          title: "Precalculus",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! This is the actual note. Cool isn’t it? Woah more text, I never thought",
          imageUrl:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
          tstamp: "07 jan 24",
        },
      ],
      resources: [
        {
          resourceId: "12",
          title: "Why Math?",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "R.D. Driver",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
        {
          resourceId: "12",
          title: "Precalculus with Calculus Previews",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "Dennis G. Zill, Jacqueline M. D",
          imageUrl: "",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
    },
  ],
};

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },

  {
    id: "e1-3",
    source: "1",
    target: "3",
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
  },
  {
    id: "e7-8",
    source: "7",
    target: "8",
  },
  {
    id: "e8-9",
    source: "8",
    target: "9",
  },
  {
    id: "e9-10",
    source: "9",
    target: "10",
  },
  {
    id: "e10-11",
    source: "10",
    target: "11",
  },
  {
    id: "e11-12",
    source: "11",
    target: "12",
  },
  {
    id: "e12-5",
    source: "12",
    target: "5",
  },
];
interface Note {
  notesId: string;
  title: string;
  link: string;
  tstamp: string;
}

interface Note {
  notesId: string;
  [key: string]: any;
}

interface Resource {
  resourceId: string;
  [key: string]: any;
}

interface Info {
  id: string;
  data: any;
  notes: any;
  resources: any;
}

interface MergedData {
  id: string;
  data: any;
}

interface NodeData {
  id: string;
  position: { x: number; y: number };
  data: {
    label: string;
    icon: string;
    description: string;
    links: { linkName: string; link: string }[];
  };
}

function ResourceBackground(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="179.67"
      height="179.67"
      viewBox="0 0 131 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4388_3201)">
        <rect width="131" height="131" fill="url(#paint0_linear_4388_3201)" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4388_3201"
          x1="65.5"
          y1="0"
          x2="65.5"
          y2="131"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EFD39F" />
          <stop offset="1" stop-color="#CBF0B5" />
        </linearGradient>
        <clipPath id="clip0_4388_3201">
          <path
            d="M0 2.8C0 1.25361 1.2536 0 2.8 0H127.87C129.416 0 130.67 1.2536 130.67 2.8V127.87C130.67 129.416 129.416 130.67 127.87 130.67H2.8C1.25361 130.67 0 129.416 0 127.87V2.8Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function ImageBackground({
  src,
  noteIndex,
  index,
  ...props
}: { src: string; noteIndex: any; index: any } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="131"
      height="131"
      viewBox="0 0 131 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <linearGradient
          id={`paint0_linear_${noteIndex}_${index}`}
          x1="65.5"
          y1="0"
          x2="65.5"
          y2="131"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EFD39F" />
          <stop offset="1" stopColor="#CBF0B5" />
        </linearGradient>
        <pattern
          id={`pattern0_${noteIndex}_${index}`}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <image
            xlinkHref={src}
            width="318"
            height="459"
            transform="scale(0.00314465 0.00217946)"
          />
        </pattern>
        <clipPath id={`clip0_${noteIndex}_${index}`}>
          <path
            fill="white"
            d="M0 2.8C0 1.25361 1.2536 0 2.8 0H127.87C129.416 0 130.67 1.2536 130.67 2.8V127.87C130.67 129.416 129.416 130.67 127.87 130.67H2.8C1.25361 130.67 0 129.416 0 127.87V2.8Z"
          />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip0_${noteIndex}_${index})`}>
        <rect
          width="131"
          height="131"
          fill={`url(#paint0_linear_${noteIndex}_${index})`}
        />
        <rect
          x="30"
          y="14"
          width="70"
          height="101"
          fill={`url(#pattern0_${noteIndex}_${index})`}
        />
      </g>
    </svg>
  );
}

function MathPage() {
  const theme = useContext(ThemeContext);

  const [getMobileView, setMobileView] = useState(false);
  const [getActiveTab, setActiveTab] = useState("pages");

  const [getShowDetails, setShowDetails] = useState(true);
  const [getShowResources, setShowResources] = useState(false);
  const [getShowNotes, setShowNotes] = useState(false);
  const [selectedNoteData, setSelectedNoteData] = useState<any[]>([]);
  const [getResourceData, setResourceData] = useState<any[]>([]);
  const [getResourceClose, setResourceClose] = useState(true);
  const [getNotesClose, setNotesClose] = useState(true);
  const [getNotes, setNotes] = useState([]);
  const [getResourceContent, setResourceContent] = useState<any[]>([]);
  const [getRightNote, setRightNote] = useState<any[]>([]);

  const [getInitialNode, setInitialNode] = useState(initialNodes?.pages);

  const [getInitialEdge, setInitialEdge] = useState(initialEdges);

  const getAiResponse = useGlobalState("aiResponse");

  const getGroqResponse = getAiResponse[0];

  useEffect(() => {
    if (getGroqResponse) {
      const Pages = getGroqResponse?.pages;

      let PageEdge = [];

      for (let pageItem = 0; pageItem < Pages?.length; pageItem++) {
        const id = Pages[pageItem]?.id;

        const PageId = id;

        const TargetId = (Number(PageId) + Number(1)).toString();

        const Create_Page_Edge_Object = {
          id: `e${PageId}-${TargetId}`,
          source: PageId,
          target: TargetId,
        };

        PageEdge.push(Create_Page_Edge_Object);
      }
      setInitialNode(getGroqResponse?.pages);
      setNotesInfo([Pages[0]]);
      setInitialEdge(PageEdge);
    }
  }, [getGroqResponse]);

  const [selectedNodeData, setSelectedNodeData] = useState<NodeData | null>(
    null
  );

  const [getNotesInfo, setNotesInfo] = useState([
    {
      id: "1",
      position: { x: 0, y: 10 },
      data: {
        label: "Prerequisites",
        icon:'🧠',
        description: `
       <h3 style="width: 424px; font-size: 2em; font-weight: bold; margin-bottom: 1em;">Popular Math Books</h3>
       
   
   <p style="font-size: 1rem;">Before you dive into the more formal and difficult coursework, you might find it helpful or fun to read some books about mathematics and mathematicians that are a little more accessible than many of the textbooks you will find in the curriculum that follows.</p>
   
   <p style="margin-bottom: 2em;">Here are a handful of my favorite popular mathematics books, ranked in order of difficulty:</p>
   
   
     <p style="margin-bottom: 1.5em;"><strong>e: The Story of a Number</strong> by Eli Maor (Level: Easy). A fun, accessible book that will get you excited about mathematics.</p>
    
     <p style="margin-bottom: 1.5em;"><strong>The Joy Of X: A Guided Tour of Math, from One to Infinity</strong> by Steven H. Strogatz (Level: Easy). A lot of fun to read, but make sure you get the paperback or hardcover version for readability purposes.</p>
    
     <p style="margin-bottom: 1.5em;"><strong>Fermat’s Enigma</strong> by Simon Singh (Level: Easy). A beautifully-written book about Fermat’s Last Theorem.</p>
     
     <p style="margin-bottom: 1.5em;"><strong>The Man Who Loved Only Numbers</strong> by Paul Hoffman (Level: Easy). A compulsively-readable biography of Paul Erdős.</p>
    
     <p style="margin-bottom: 1.5em;"><strong>The Man Who Knew Infinity</strong> by Robert Kanigel (which was also made into a film) (Level: Easy). A wonderful biography of Srinivasa Ramanujan.</p>
    
     <p style="margin-bottom: 1.5em;"><strong>Flatland</strong> by Edwin A. Abbott (Level: Easy). A classic. I highly recommend the annotated version, which adds extra joy to the reading experience.</p>
     
     <p style="margin-bottom: 1.5em;"><strong>A Mathematician’s Apology</strong> by G.H. Hardy (Level: Medium). One of the most beautiful things ever written about mathematics, by one of the greatest mathematicians of all time.</p>
     
     <p style="margin-bottom: 1.5em;"><strong>Fearless Symmetry</strong> by Avner Ash and Robert Gross (Level: Difficult). One of my all-time favorites.</p>
     
     <p style="margin-bottom: 1.5em;"><strong>Proofs from THE BOOK</strong> by Martin Aigner and Günter M. Ziegler (Level: Difficult). This book is an absolute joy to read in small bits and pieces. The more math you learn, the more you will fall in love with it.</p>
   
   
       `,
        links: [
          {
            linkName: "Link 1",
            link: " ",
          },
        ],
      },

      notes: [
        {
          notesId: "1",
          title: "Very hi note!",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen! ",
          tstamp: "03 jan 24",
          links: [
            {
              linkName: "Link 1",
              link: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
        },
        {
          notesId: "1",
          title: "NOTES",
          description:
            "This is the actual note. Cool isn’t it? Woah more text, I never thought that would happen!  Woah more text, I never thought",
          tstamp: "07 jan 24",
          links: [
            {
              linkName: "Link 1",
              link: " ",
            },
          ],
        },
      ],
      resources: [
        {
          resourceId: "1",
          title: "e: The Story of a Number",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "book",
          source: "Eli Maor",
          image: "",
          links: [
            {
              linkName: "Link 1",
              link: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
        },
        {
          resourceId: "1",
          title: "The Joy Of X: A Guided Tour of Math, from One to Infinity",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "Book|Link",
          source: "Steven H. Strogatz",
          image: "",
          links: [
            {
              linkName: "Link 1",
              link: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
        },
        {
          resourceId: "1",
          title: "Fermat’s Enigma",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: " Book|Link ",
          source: "Simon Singh",
          image: "",
          links: [
            {
              linkName: "Link 1",
              link: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
        },
        {
          resourceId: "1",
          title: "The Man Who Loved Only Numbers",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "Book|Link",
          source: "Paul Hoffman",
          image: "",
          links: [
            {
              linkName: "Link 1",
              link: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
        },
        {
          resourceId: "1",
          title: "The Man Who Knew Infinity",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "Book|Link",
          source: "Robert Kanigel",
          image: "",
          links: [
            {
              linkName: "Link 1",
              link: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
        },
        {
          resourceId: "1",
          title: "Flatland",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "Book|Link",
          source: "Edwin A. Abbott",
          image: "",
          links: [
            {
              linkName: "Link 1",
              link: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
        },
        {
          resourceId: "1",
          title: "A Mathematician’s Apology",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "G.H. Hardy",
          image: "",
          links: [
            {
              linkName: "Link 1",
              link: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
        },
        {
          resourceId: "1",
          title: "Fearless Symmetry",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: "Avner Ash and Robert Gross",
          image: "",
          links: [
            {
              linkName: "Link 1",
              link: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
        },
        {
          resourceId: "1",
          title: "Proofs from THE BOOK",
          description:
            "The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.",
          type: "",
          source: " Martin Aigner and Günter M. Ziegler",
          image: "",
          links: [
            {
              linkName: "Link 1",
              link: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
        },
      ],
    },
  ]);

  const content = getNotes
    ?.map((item: any) => item?.data?.description)
    .toString();

  const pathname = usePathname();

  useEffect(() => {
    // Set the first node as the selected node by default
    if (getInitialNode?.length > 0) {
      setSelectedNodeData(getInitialNode[0]);
      // setShowDetails(true)
    }
  }, []);

  const getResourceAndNotes = (
    getNotesInfo: Info[],
    parent: any,
    child: any
  ): MergedData[] => {
    return getNotesInfo.map((info: Info) => {
      return {
        id: info.id,
        data: info.data,
        notes: info?.notes,
        resource: info?.resources,
        parent: parent,
        child: child,
      };
    });
  };



  useEffect(() => {
    let ResourceArray = [];

    for (
      let resourceItem = 0;
      resourceItem < getInitialNode?.length;
      resourceItem++
    ) {
      const notes = getInitialNode[resourceItem]?.notes;

      const resource = getInitialNode[resourceItem]?.resources;

      const Create_Object = {
        notes: notes,
        resources: resource,
      };

      ResourceArray.push(Create_Object);
    }
    setResourceContent(ResourceArray);
  }, [getActiveTab, getInitialNode]);

  const getSelectedNodeData = useCallback(
    (
      getInitialNode: any,
      getInitialEdge: any,
      getNotesInfo: any,
      selectedNodeData: any,
      setNotes: any
    ) => {
      const getNodeById = (id: any) =>
        getInitialNode.find((node: any) => node.id === id);

      const parents: any = [];
      const children: any = [];

      getInitialEdge.forEach((edge: any) => {
        if (edge.source === selectedNodeData.id) {
          const childNode = getNodeById(edge.target);
          if (childNode) {
            children.push(childNode);
          }
        }
        if (edge.target === selectedNodeData.id) {
          const parentNode = getNodeById(edge.source);
          if (parentNode) {
            parents.push(parentNode);
          }
        }
      });

      const parentNodesData = parents.map((node: any) => node.data);
      const childNodesData = children.map((node: any) => node.data);

      const getNotes = getResourceAndNotes(
        getNotesInfo,
        parentNodesData,
        childNodesData
      );
      setNotes(getNotes);
    },
    []
  );

  useEffect(() => {
    if (selectedNodeData) {
      getSelectedNodeData(
        getInitialNode,
        getInitialEdge,
        getNotesInfo,
        selectedNodeData,
        setNotes
      );
    }
  }, [
    getInitialNode,
    getInitialEdge,
    getNotesInfo,
    selectedNodeData,
    getSelectedNodeData,
    setNotes,
  ]);

  const onNodeClick = useCallback(
    (event: any, node: any) => {
      let arrayNode: any = [];
      setSelectedNodeData(node);
      setShowDetails(true);
      arrayNode.push(node);
      setNotesInfo(arrayNode);
    },
    [setSelectedNodeData, setShowDetails, setNotesInfo]
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileView(false);
      } else {
        setMobileView(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabChange = (value: any) => {
    setActiveTab(value);
  };

  const handlClose = (data: any) => {
    setShowDetails(data);
  };
  const handleNote = (note: any) => {
    setShowNotes(true);
    setRightNote([note]);
    setShowDetails(true);
  };

  const handleResource = (data: object, resource: any) => {
    setShowResources(true);
    // setResourceData([data]);

    let resourceArray: any = [];

    const createObject = {
      resources: resource,
      notes: data,
    };

    resourceArray.push(createObject);

    setShowDetails(true);

    setResourceData(resourceArray);
  };

  useEffect(()=>
    {

          const decodedPathname = decodeURIComponent(pathname);


          let savedResponse;

           if (typeof window !== 'undefined') 
          {
             savedResponse =  window.localStorage.getItem('responseArray');
           }
         

          if(savedResponse)
          {


            const data = JSON.parse(savedResponse);



            for(let i =0 ;i< data?.length; i++)
            {
              
            const name = data[i]?.collection?.name;
    
            let PageEdge = [];

            if(`/${name}` === decodedPathname)
            {
             
               const Pages = data[i]?.pages;
   
      
               for(let pageItem = 0; pageItem < Pages?.length; pageItem++)
               {
                
                  const id = Pages[pageItem]?.id;
      
                  const PageId = id;
               
                  const TargetId = ( Number(PageId) + Number(1)).toString()
      
                  const Create_Page_Edge_Object = 
                  {
                      id: `e${PageId}-${TargetId}`,
                      source: PageId,
                      target: TargetId
                  }
      
                  PageEdge.push(Create_Page_Edge_Object)
                }
             
                 setInitialNode(data[i]?.pages)
                 setNotesInfo([Pages[0]])
                 setInitialEdge(PageEdge)


          }
          else if(pathname ==='/maths')
          {
            setInitialNode(initialNodes?.pages)
            setInitialEdge(initialEdges)
            setNotesInfo([initialNodes?.pages[0]])
          }
        }
        }

    },[pathname])


  const handelResourceClose = (data: any) => {
    setResourceClose(data);
    setShowDetails(data);
  };

  const handelNotesClose = (data: any) => {
    setNotesClose(data);
    setShowDetails(data);
  };
  const HorizontalDot = () => {
    return (
      <svg
        className="h-5 w-5"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  };

  const MixerHorizontal = () => {
    return (
      <>
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.74291 3.2318L2.65571 2.80003L2.74291 2.36826C2.94281 1.37845 3.81828 0.633362 4.86665 0.633362C5.91502 0.633362 6.79049 1.37845 6.99039 2.36826L7.07759 2.80003L6.99039 3.2318C6.79049 4.2216 5.91502 4.9667 4.86665 4.9667C3.81828 4.9667 2.94281 4.2216 2.74291 3.2318ZM2.20393 2.76688L2.54139 2.80003L2.20393 2.83317L2.19998 2.83336H0.599984C0.581577 2.83336 0.56665 2.81844 0.56665 2.80003C0.56665 2.78162 0.581577 2.7667 0.599984 2.7667H2.19998L2.20393 2.76688ZM7.52937 2.83317L7.19191 2.80003L7.52938 2.76688L7.53332 2.7667H13.4C13.4184 2.7667 13.4333 2.78165 13.4333 2.80003C13.4333 2.81841 13.4184 2.83336 13.4 2.83336H7.53332L7.52937 2.83317ZM11.796 9.23319L11.4583 9.20003L11.796 9.16686L11.8 9.1667H13.4C13.4183 9.1667 13.4333 9.18166 13.4333 9.20003C13.4333 9.21839 13.4183 9.23336 13.4 9.23336H11.8L11.796 9.23319ZM11.2571 8.76824L11.3443 9.20003L11.2571 9.63182C11.0572 10.6216 10.1817 11.3667 9.13332 11.3667C8.08494 11.3667 7.20947 10.6216 7.00958 9.63182L6.92237 9.20003L7.00958 8.76824C7.20947 7.77846 8.08494 7.03336 9.13332 7.03336C10.1817 7.03336 11.0572 7.77847 11.2571 8.76824ZM6.47059 9.16686L6.8082 9.20003L6.47059 9.2332L6.46665 9.23336H0.599984C0.581603 9.23336 0.56665 9.21842 0.56665 9.20003C0.56665 9.18164 0.581603 9.1667 0.599984 9.1667H6.46665L6.47059 9.16686ZM4.86665 0.700029C3.70685 0.700029 2.76665 1.64023 2.76665 2.80003C2.76665 3.95983 3.70685 4.90003 4.86665 4.90003C6.02645 4.90003 6.96665 3.95983 6.96665 2.80003C6.96665 1.64023 6.02645 0.700029 4.86665 0.700029ZM9.13332 7.10003C7.97352 7.10003 7.03332 8.04023 7.03332 9.20003C7.03332 10.3598 7.97351 11.3 9.13332 11.3C10.2931 11.3 11.2333 10.3598 11.2333 9.20003C11.2333 8.04022 10.2931 7.10003 9.13332 7.10003Z"
            fill="#0C0A09"
            stroke="#0C0A09"
          />
        </svg>
      </>
    );
 };

  function RenderResources() {
    return (
      <ScrollArea className="h-screen pb-5">
        <div className="space-y-8 px-14 pb-12">
          <div className="space-y-4">
            <div className="flex flex-wrap justify-between mt-4">
              <div>
                <h2 className="font-sans font-semibold text-3xl tracking-wide">
                  Resources
                </h2>
              </div>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      <MixerHorizontal />
                      &nbsp;&nbsp;View
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full">
                    <div className="p-1 space-y-4">
                      <div className="font-medium font-sans text-base leading-none">
                        View options
                      </div>
                      <div className="flex gap-x-8 justify-between align-middle">
                        <div className="flex-none w-20">
                          <Label className="font-sans font-medium text-sm">
                            Filter
                          </Label>
                        </div>
                        <div className="flex-auto w-64">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="None" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>None</SelectLabel>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex gap-x-8 justify-between align-middle">
                        <div className="flex-none w-20">
                          <Label className="font-sans font-medium text-sm">
                            Sort
                          </Label>
                        </div>
                        <div className="flex-auto w-64">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="None" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>None</SelectLabel>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex gap-x-8 justify-between align-middle">
                        <div className="flex-none w-20">
                          <Label className="font-sans font-medium text-sm">
                            Group
                          </Label>
                        </div>
                        <div className="flex-auto w-64">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>None</SelectLabel>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex gap-x-8 justify-between align-middle">
                        <div className="flex-none w-20">
                          <Label className="font-sans font-medium text-sm">
                            Sub-group
                          </Label>
                        </div>
                        <div className="flex-auto w-64">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="None" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>None</SelectLabel>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-3">
              {getResourceContent?.map((item: any, noteIndex: number) =>
                item?.resources?.map((resource: Resource, index: number) => (
                  <div
                    key={`note_${noteIndex}_resource_${index}`}
                    className="space-y-1.5"
                    onClick={() => handleResource(item?.notes, resource)}
                  >
                    {resource?.imageUrl ? (
                      <ImageBackground
                        src="https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180"//{resource?.imageUrl}
                        noteIndex={noteIndex}
                        index={index}
                        className="w-full h-auto cursor-pointer"
                      />
                    ) : (
                      <div
                        key={`placeholder_${noteIndex}_${index}`}
                        className="placeholder"
                      >
                        <ImageBackground
                          src=""
                          noteIndex={noteIndex}
                          index={index}
                          className="w-full h-auto cursor-pointer"
                        />
                      </div>
                    )}

                    <div className="flex flex-col space-y-1.5">
                      <div className="font-sans text-sm font-medium overflow-hidden overflow-ellipsis">
                        {resource?.title}
                      </div>
                      <div className="font-sans text-xs text-[#78716C] font-normal leading-5 overflow-hidden overflow-ellipsis">
                        {resource?.source}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </ScrollArea>
    );
  }

  function RenderRightResource() {
    return (
      <ScrollArea className="h-screen pb-5 pt-0">
        <div className="space-y-8">
          {getShowResources && getResourceData.length > 0 && (
            <div className="resizable-panel flex flex-col w-full">
              {getResourceData.map((resource, index) => (
                <div
                  key={`resource_${index}`}
                  className="mb-4 w-full flex flex-col"
                >
                  <div className="relative w-full h-auto md:h-[316px] p-0 gap-[10px]">
                    <div className="w-full h-full">
                      <div className="frame-8">
                        <img
                          src="https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180"  //{resource?.resources?.imageUrl}
                          alt=""
                          className="object-contain w-full h-full"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                          }}
                        />
                        {!resource?.resources?.imageUrl && (
                          <div className="absolute inset-0 w-full h-full  flex items-center justify-center">
                            {/* Placeholder content or styles when no image link */}
                            <div className="frame-8 "></div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between leading-9 overflow-hidden absolute top-2 right-2 w-full">
                      <div className="flex space-x-2 pl-5 pt-3 min-w-max">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handlClose(false)}
                          className="flex-shrink-0"
                        >
                          <PanelRightClose
                            strokeWidth={1}
                            className="w-4 h-4"
                          />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="flex-shrink-0"
                        >
                          <Maximize strokeWidth={1} className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="flex-shrink-0"
                        >
                          <Columns strokeWidth={1} className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex space-x-2 pl-5 pt-3 min-w-max ml-auto">
                        <Button
                          variant="outline"
                          size="icon"
                          className="flex-shrink-0"
                        >
                          <Link strokeWidth={1} className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="flex-shrink-0"
                        >
                          <HorizontalDot />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 md:ml-12 mt-6">
                    <div className="font-sans text-start pt-4 font-semibold text-xl md:text-2xl">
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {resource?.resources?.title}
                      </h2>
                    </div>
                    <div className="flex flex-col gap-2.5 mt-6 px-px py-2">
                      <div className="flex items-center gap-2.5">
                        <Label className="font-sans font-medium text-sm">
                          Source
                        </Label>
                        <div className="flex flex-wrap gap-2 ml-8">
                   
                          {resource?.resources?.source && (
                            <Badge>{resource?.resources?.source}</Badge>
                          )}
                
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Label className="font-sans font-medium text-sm">
                          Type
                        </Label>
                        <div className="flex flex-wrap gap-2 ml-11">
                          {resource?.resources?.type && (
                            <Badge>{resource?.resources?.type}</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Label className="font-sans font-medium text-sm">
                          Link
                        </Label>
                        <div className="flex flex-wrap gap-2 ml-12">
                          {resource?.resources?.links?.map((linkItem:any,linkIndex:any)=>
                          (
                            <>
                             <Badge key={linkIndex}>{linkItem?.linkName}</Badge>
                            </>
                          ))}
                
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-y-3.5 py-8">
                      <Separator />
                    </div>
                    <div className="font-sans font-normal text-base">
                      <Editor
                        editorJson={resource.resources.description}
                        id="1"
                      />
                    </div>
                    <div className="flex gap-y-3.5 py-8">
                      <Separator />
                    </div>
                    <div className="space-y-8">
                      <div>
                        <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-wide">
                          Notes
                        </h2>
                      </div>
                      <div className="grid grid-cols-1 grid-flow-row gap-4">
                        {getResourceData?.map((items: any) =>
                          items?.notes?.map((item: any, index: any) => (
                            <Card
                              key={index}
                              className="w-full leading-4 border h-full p-4 flex"
                            >
                              {item?.link && (
                                <div className="mr-4">
                                  <Image
                                    src={item?.link}
                                    width={126}
                                    height={126}
                                    className="object-cover rounded-sm"
                                    alt="Picture of the author"
                                  />
                                </div>
                              )}
                              <div className="flex-1 space-y-2.5">
                                <div className="font-sans text-black font-semibold text-base">
                                  {item?.title}
                                </div>
                                <div className="font-normal text-[#78716C] text-sm leading-5">
                                  {item?.description}
                                </div>
                                <div className="flex flex-wrap justify-between gap-2 items-center">
                                  <div className="flex space-x-2">
                                    <Badge>Tag1</Badge>
                                    <Badge>Tag2</Badge>
                                  </div>
                                  <div>
                                    <Badge variant="secondary">
                                      {item?.tstamp}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollArea>
    );
  }

  // // Add the following styles to your CSS or use inline styles.
  // const truncatedTextStyle: React.CSSProperties = {
  //   display: "-webkit-box",
  //   WebkitBoxOrient: "vertical",
  //   overflow: "hidden",
  //   WebkitLineClamp: 2,
  //   textOverflow: "ellipsis",
  //   wordBreak: "break-word" as "break-word", // Explicitly cast to 'break-word'
  // };

  function RenderNotes() {
    // State to manage expanded text for each note
    // const [expandedNotes, setExpandedNotes] = useState<Set<string>>(new Set());

    // const handleToggleExpand = (noteId: string) => {
    //   setExpandedNotes((prev) => {
    //     const newExpandedNotes = new Set(prev);
    //     if (newExpandedNotes.has(noteId)) {
    //       newExpandedNotes.delete(noteId);
    //     } else {
    //       newExpandedNotes.add(noteId);
    //     }
    //     return newExpandedNotes;
    //   });
    // };
    // console.log("getResourceContent",getResourceContent)

    return (
      <ScrollArea className="h-screen pb-5">
        <div className="space-y-8 px-14 pb-12">
          <div>
            <div className="space-y-4">
              <div className="flex flex-wrap justify-between mt-4">
                <div>
                  <h2 className="font-sans font-semibold text-3xl tracking-wide">
                    Notes
                  </h2>
                </div>
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">
                        <MixerHorizontal />
                        &nbsp;&nbsp;View
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full">
                      <div className="p-1 space-y-4">
                        <div className="font-medium font-sans text-base leading-none">
                          View options
                        </div>
                        <div className="flex gap-x-8 justify-between align-middle">
                          <div className="flex-none w-20">
                            <Label className="font-sans font-medium text-sm">
                              Filter
                            </Label>
                          </div>
                          <div className="flex-auto w-64">
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="None" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>None</SelectLabel>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex gap-x-8 justify-between align-middle">
                          <div className="flex-none w-20">
                            <Label className="font-sans font-medium text-sm">
                              Sort
                            </Label>
                          </div>
                          <div className="flex-auto w-64">
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="None" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>None</SelectLabel>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex gap-x-8 justify-between align-middle">
                          <div className="flex-none w-20">
                            <Label className="font-sans font-medium text-sm">
                              Group
                            </Label>
                          </div>
                          <div className="flex-auto w-64">
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>None</SelectLabel>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="flex gap-x-8 justify-between align-middle">
                          <div className="flex-none w-20">
                            <Label className="font-sans font-medium text-sm">
                              Sub-group
                            </Label>
                          </div>
                          <div className="flex-auto w-64">
                            <Select>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="None" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>None</SelectLabel>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {getResourceContent?.map((item: any, itemIndex: number) =>
                  item?.notes?.map((note: any, noteIndex: number) => {
                    const noteId = `${itemIndex}-${noteIndex}`;
                    return (
                      <Card
                        key={noteId}
                        className="flex flex-col h-full p-4 cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => handleNote(note)}
                      >
                        <div className="flex">
                          {note?.imageUrl && (
                            <div className="mr-4">
                              <Image
                                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"  //{note?.imageUrl}
                                width={126}
                                height={126}
                                className="object-cover rounded-sm"
                                alt="Picture of the author"
                              />
                            </div>
                          )}
                          <div className="flex-1 space-y-2.5">
                            <div className="font-sans text-black font-semibold text-base">
                              {note?.title}
                            </div>
                            <div
                              className="font-normal text-[#78716C] text-sm leading-5"
                              // style={
                              //   expandedNotes.has(noteId)
                              //     ? {}
                              //     : truncatedTextStyle
                              // }
                            >
                              {note?.description}
                            </div>
                            {/* {note?.description.length > 100 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent card click event
                                  handleToggleExpand(noteId);
                                }}
                                className="read-more"
                              >
                                {expandedNotes.has(noteId)
                                  ? "Show less"
                                  : "Read More"}
                              </button>
                            )} */}
                            <div className="flex flex-wrap justify-between gap-2 items-center">
                              <div className="flex space-x-2">
                                <Badge>Tag1</Badge>
                                <Badge>Tag2</Badge>
                              </div>
                              <div>
                                <Badge variant="secondary">
                                  {note?.tstamp}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })
                )}
              </div>
            </div>
          </div>
          <div className="mb-6"></div>
        </div>
      </ScrollArea>
    );
  }

  function RenderRightNotes() {
    return (
      <ScrollArea className="h-screen pb-5 pt-0">
        <div className="space-y-8 ">
          <div className="flex justify-between leading-9 overflow-hidden absolute top-2 right-2 w-full">
            <div className="flex space-x-2 pl-5 pt-3 min-w-max">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlClose(false)}
                className="flex-shrink-0"
              >
                <PanelRightClose strokeWidth={1} className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="flex-shrink-0">
                <Maximize strokeWidth={1} className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="flex-shrink-0">
                <Columns strokeWidth={1} className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex space-x-2 p-1 min-w-max ml-auto">
              <Button variant="outline" size="icon" className="flex-shrink-0">
                <Link strokeWidth={1} className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="flex-shrink-0">
                <HorizontalDot />
              </Button>
            </div>
          </div>

          {getRightNote.map((item: any, index: number) => (
            <div className="ml-4 md:ml-12 mt-6 pr-12" key={index}>
              <div className="font-sans text-start pt-8 font-semibold text-xl md:text-2xl">
                <h2 className="text-2xl md:text-3xl font-bold">{item.title}</h2>
                <div className="flex flex-col gap-2.5 mt-6 px-px py-2">
                  <div className="flex items-center gap-2.5">
                    <Label className="font-sans font-medium text-sm">
                      Link
                    </Label>
                    <div className="flex flex-wrap gap-2 ml-12">
                      {item?.links?.map((linkItem: any, linkIndex: any) => (
                        <Badge key={linkIndex}>{linkItem?.linkName}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-y-3.5 py-8">
                    <Separator />
                  </div>
                  <div className="font-sans font-normal text-base">
                    <Editor editorJson={item.description} id="1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    );
  }

  function RenderPage() {
    return (
      <ScrollArea className="h-screen pb-5  ">
        <div className="flex justify-between pt-4  p-2 overflow-hidden">
          <div className="flex space-x-2 p-1 min-w-max">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlClose(false)}
              className=" flex-shrink-0"
            >
              <PanelRightClose strokeWidth={1} className="w-4 h-4 " />
            </Button>
            <Button variant="outline" size="icon" className=" flex-shrink-0">
              <Maximize strokeWidth={1} className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className=" flex-shrink-0">
              <Columns strokeWidth={1} className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex space-x-2 p-1 min-w-max ">
            <Button variant="outline" size="icon">
              <Link strokeWidth={1} className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" >
              <HorizontalDot />
            </Button>
          </div>
        </div>
        <div className="space-y-8 ml-12 pr-14 ">
          <div>
            <div className="font-sans text-start font-semibold text-2xl md:text-3xl mt-6 md:mt-12 ">
              {getNotesInfo.map((item, index) => (
                <div key={index}>
                  {/* Render label */}
                  <h2>{item?.data?.icon ? item?.data?.icon : '🧠'} {item?.data?.label}</h2>
                  {/* Render description as HTML */}
                  {/* <div dangerouslySetInnerHTML={{ __html: item.data.d }} /> */}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5 px-px py-2  ">
            <div className="flex items-center gap-2.5">
              <Label className="font-sans font-medium text-sm">Parent</Label>
              <div className="flex flex-wrap gap-2 ml-14">
                {getNotes?.map((item: any) =>
                  item?.parent?.map((items: any, index: any) => (
                    <Badge key={index}>{items?.label}</Badge>
                  ))
                )}
              </div>
            </div>

            <div className="flex items-center gap-2.5 ">
              <Label className="font-sans font-medium text-sm">Children</Label>
              <div className="flex flex-wrap gap-2 ml-11">
                {getNotes?.map((item: any) =>
                  item?.child?.map((items: any, index: any) => (
                    <Badge key={index}>{items?.label}</Badge>
                  ))
                )}
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Label className="font-sans font-medium text-sm">Links</Label>
              <div className="flex flex-wrap gap-2 ml-16">
                {getNotes?.map((item: any) =>
                  item?.data?.links?.map((items: any, index: any) => (
                    items?.linkName && <Badge key={index}>{items?.linkName}</Badge>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-y-2.5">
            <Separator />
          </div>

          <div className="font-sans font-normal text-base">
            {/* <EditorContent editor={editor} className="tiptap-editor" /> */}

            <Editor editorJson={content} id="1" />
          </div>

          <div className="flex gap-y-2.5">
            <Separator className="" />
          </div>


          <div className="space-y-8">
            <div>
              <h2 className="font-sans font-semibold text-3xl tracking-wide">
                Resources
              </h2>
            </div>

            <div className="grid grid-cols-3 grid-flow-row gap-4">

             {getNotes?.map((item: any, noteIndex: number) =>
                item?.resource?.map((resource: Resource, index: number) => (
                  <div
                    key={`note_${noteIndex}_resource_${index}`}
                    className="space-y-1.5"
                    onClick={() => handleResource(item?.notes, resource)}
                  >
                    {resource?.imageUrl ? (
                      <ImageBackground
                        src="https://tse2.mm.bing.net/th?id=OIP.bG_HgX_ULcboamN8i1wm9wHaKr&pid=Api&P=0&h=180"//{resource?.imageUrl}
                        noteIndex={noteIndex}
                        index={index}
                        className="w-full h-auto cursor-pointer"
                      />
                    ) : (
                      <div
                        key={`placeholder_${noteIndex}_${index}`}
                        className="placeholder"
                      >
                        <ImageBackground
                          src=""
                          noteIndex={noteIndex}
                          index={index}
                          className="w-full h-auto cursor-pointer"
                        />
                      </div>
                    )}

                    <div className="flex flex-col space-y-1.5">
                      <div className="font-sans text-sm font-medium overflow-hidden overflow-ellipsis">
                        {resource?.title}
                      </div>
                      <div className="font-sans text-xs text-[#78716C] font-normal leading-5 overflow-hidden overflow-ellipsis">
                        {resource?.source}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-sans font-semibold text-3xl tracking-wide">
                Notes
              </h2>
            </div>

            <div className="grid grid-cols-1 grid-flow-row gap-4">
              {getNotes?.map((items: any) =>
                items?.notes?.map((item: any, index: any) => (
                  <Card
                    key={index}
                    className="w-full leading-4 border h-full p-4 flex"
                  >
                    {item?.link && (
                      <div className="mr-4">
                        <Image
                          src={item?.link}
                          width={126}
                          height={126}
                          className="object-cover rounded-sm"
                          alt="Picture of the author"
                        />
                      </div>
                    )}

                    <div className="flex-1 space-y-2.5">
                      <div className="font-sans text-black font-semibold text-base">
                        {item?.title}
                      </div>
                      <div className="font-normal text-[#78716C] text-sm leading-5">
                        {item?.description}
                      </div>
                      <div className="flex flex-wrap justify-between gap-2 items-center">
                        <div className="flex space-x-2">
                          <Badge>Tag1</Badge>
                          <Badge>Tag2</Badge>
                        </div>
                        <div>
                          <Badge variant="secondary">{item?.tstamp}</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
          <div className="mb-6"></div>
        </div>
      </ScrollArea>
    );
  }

  return getMobileView === false ? (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          className="h-full  "
          defaultSize={getShowDetails ? 50 : 100}
        >
          <div className="flex justify-between items-center w-full pt-1.5 ">
            <div className="flex-1 flex justify-center overflow-hidden pt-1">
              <Tabs
                defaultValue="pages"
                value={getActiveTab}
                onValueChange={handleTabChange}
              >
                <TabsList className="flex w-full ">
                  <TabsTrigger className="flex-1 text-center" value="pages">
                    Pages
                  </TabsTrigger>
                  <TabsTrigger className="flex-1 text-center" value="resources">
                    Resources
                  </TabsTrigger>
                  <TabsTrigger className="flex-1 text-center" value="notes">
                    Notes
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="flex space-x-2 p-1 py-4 px-2 min-w-max">
              <Button variant="outline" size="icon" className=" flex-shrink-0">
                <Link strokeWidth={1} className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className=" flex-shrink-0">
                <HorizontalDot />
              </Button>
            </div>
          </div>
          {/* <div
            style={{
              flexGrow: 1,

              height: "200vh",
              display: "flex",
              overflow: "hidden",
              justifyContent: getShowDetails ? "flex-start" : "center",
              alignItems: "flex-start",
              transition: "all 0.3s ease", // For smooth animation
            }}
          > */}
         <div style={{ width: getShowDetails?'45vw':'83vw', height: '100vh' }}>
            {getActiveTab === "resources" ? (
              <RenderResources />
            ) : getActiveTab === "notes" ? (
              <RenderNotes />
            ) : (
              <ProviderFlow
                setShowDetails={setShowDetails}
                getShowDetails={getShowDetails}
                setNotes={setNotes}
                getNotesInfo={getNotesInfo}
                selectedNodeData={selectedNodeData}
                onNodeClick={onNodeClick}
                initialNodes={getInitialNode}
                initialEdges={getInitialEdge}
              />
            )}
          </div>
        </ResizablePanel>

        <ResizableHandle />

        {getShowDetails && (
          <ResizablePanel className="h-full " defaultSize={50} maxSize={76}>
            <Card className="flex-grow h-full ">
              <Tabs
                value={getActiveTab}
                onValueChange={handleTabChange}
                className="w-full h-full "
              >
                <TabsContent value="pages" className=" h-full p-0  ">
                  <RenderPage />
                </TabsContent>

                <TabsContent value="resources" className="h-full p-0">
                  {getResourceData?.length > 0 ? (
                    <RenderRightResource />
                  ) : (
                    <RenderPage />
                  )}
                </TabsContent>

                <TabsContent value="notes" className="h-full p-0 ">
                  {getRightNote?.length > 0 ? (
                    <RenderRightNotes />
                  ) : (
                    <RenderPage />
                  )}
                </TabsContent>
              </Tabs>
            </Card>
          </ResizablePanel>
        )}
      </ResizablePanelGroup>
    </>
  ) : (
    //MOBILEVIEW
    <>
      <Tabs
        defaultValue="home"
        value={getActiveTab}
        onValueChange={handleTabChange}
      >
        <div className="flex justify-between items-center w-full pt-0">
          <div className="flex-1 flex justify-center overflow-hidden pt-0">
            <TabsList className="flex w-full">
              <TabsTrigger className="flex-1 text-center" value="pages">
                Pages
              </TabsTrigger>
              <TabsTrigger className="flex-1 text-center" value="resources">
                Resources
              </TabsTrigger>
              <TabsTrigger className="flex-1 text-center" value="notes">
                Notes
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex space-x-2 p-1 py-4 px-2 min-w-max">
            <Button variant="outline" size="icon" className="flex-shrink-0">
              <Link strokeWidth={1} className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="flex-shrink-0">
              <HorizontalDot />
            </Button>
          </div>
        </div>
        {/* <div
          style={{
            flexGrow: 1,
            height: "200vh",
            display: "flex",
            overflow: "hidden",
            justifyContent: getShowDetails ? "flex-start" : "center",
            alignItems: "flex-start",
            transition: "all 0.3s ease", // For smooth animation
          }}
        > */}
        <div style={{ width: '100vw', height: '100vh' }}>
          {getActiveTab === "resources" ? (
            <RenderResources />
          ) : getActiveTab === "notes" ? (
            <RenderNotes />
          ) : (
            <ProviderFlow
              setShowDetails={setShowDetails}
              getShowDetails={getShowDetails}
              setNotes={setNotes}
              getNotesInfo={getNotesInfo}
              selectedNodeData={selectedNodeData}
              onNodeClick={onNodeClick}
              initialNodes={getInitialNode}
              initialEdges={getInitialEdge}
            />
          )}
        </div>
      </Tabs>

      <div
        className="fixed top-0 right-0 w-full h-full bg-white z-50"
        style={{
          transform: getShowDetails ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        {getShowDetails && (
          <Card className="h-full">
            <Tabs
              value={getActiveTab}
              onValueChange={handleTabChange}
              className="w-full h-full"
            >
              <TabsContent value="pages" className="h-full p-0">
                <RenderPage />
              </TabsContent>

              <TabsContent value="resources" className="h-full p-0">
                {getResourceData?.length > 0 ? (
                  <RenderRightResource />
                ) : (
                  <RenderPage />
                )}
              </TabsContent>

              <TabsContent value="notes" className="h-full p-0">
                {getRightNote?.length > 0 ? (
                  <RenderRightNotes />
                ) : (
                  <RenderPage />
                )}
              </TabsContent>
            </Tabs>
          </Card>
        )}
      </div>
    </>
  );
}

export default MathPage;
