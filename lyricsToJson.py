import json

# 原始歌词文本
lyrics_text = """
Dancing on the wind
Up and down again
Round and round the bend
Fa la la la la la
From a flow'ry bed
To the clouds ascend
Tumble down again
Fa la la la la la
Yet with each descent
Do we rise again
To our hearts' content
Fa la la la la la
Fly away my friend
For a day and then
We'll begin again
Fa la la la la la

Till down turn the skies (12)
Wonted quiet, wanton silence (12)
For long do we lie (12)
Wond'ring when we'll be (12)

Dancing on the wind
Up and down again
Round and round the bend
Fa la la la la la
From a flow'ry bed
To the clouds ascend
Tumble down again
Fa la la la la la
Yet with each descent
Do we rise again
To our hearts' content
Fa la la la la la
Fly away my friend
For a day and then
We'll begin again
Fa la la la la la

Still down turn the skies (12)
Gentle song gently wand'ring (12)
Along in the night (12)
Joyous cries ring free (12)

La la la la la
Lying lost in thought
Do you love me not?
Follow these
Petals cast aloft
La la la la la
Will you, when I'm gone, remember me? (6)

Ring a ling a ling
Lovers in the spring
How the garden sings
Ever green
Spirits lush, we bring
Ring a ling a ling
Braving anything
Together, we

La la la la la
Learn to play our part
Navigate the dark
Up we reach
Catch a falling star
La la la la la
Lock it in our hearts eternally (6)

Ring a ling a ling
Flying without wings
Kites without a string
Loop and leap
To these crowns we cling
Ring a ling a ling
For we'll all be kings tomorrow (6)

Autumn's whisper soaring high (6)
Lulla lulla lullaby (6)
Baby's breath and butterflies (6)
Sing in our sweet lullaby (6)
Summer child with heavy eyes (6)
Lulla lulla lullaby (6)
Come our lonely angel nigh (6)
Sing in our sweet lullaby (6)

Time wilts and fades (9)
Luster lost in the rain (15)
Bows to the blade (9)
Till the spring calls again (15)
"""

lyrics_lines = [line.strip() for line in lyrics_text.splitlines() if line.strip()]

beats_per_line = 3
lyrics_json = [{"text": line, "beats": beats_per_line} for line in lyrics_lines]

json_output = json.dumps(lyrics_json, indent=2, ensure_ascii=False)
print(json_output)
